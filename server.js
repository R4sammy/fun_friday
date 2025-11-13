const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const { v4: uuidv4 } = require('uuid');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// In-memory data store
const heists = new Map();

// API Routes

// Create a new heist
app.post('/api/heist/create', (req, res) => {
  const { missionId, hostName, roomCount } = req.body;

  // Validation
  if (!missionId || missionId.trim() === '') {
    return res.status(400).json({ error: 'Mission selection is required' });
  }

  if (!hostName || hostName.trim() === '') {
    return res.status(400).json({ error: 'Organizer name is required' });
  }

  if (!roomCount || roomCount < 1 || roomCount > 50) {
    return res.status(400).json({ error: 'Room count must be between 1 and 50' });
  }

  const heistId = uuidv4().split('-')[0]; // Shorter ID for easier sharing
  const rooms = [];

  for (let i = 1; i <= roomCount; i++) {
    rooms.push({
      roomId: `room-${i}`,
      roomNumber: i,
      inviteLink: `/heist/${heistId}/room/${i}`,
      participants: []
    });
  }

  const heist = {
    heistId,
    missionId: missionId.trim(),
    hostName: hostName.trim(),
    createdAt: new Date().toISOString(),
    status: 'ACTIVE',
    rooms: rooms.map(r => ({
      ...r,
      missionStatus: 'WAITING', // WAITING, STARTED, FAILED, COMPLETED
      readyParticipants: [],
      locked: false,
      // Scoring data
      score: 0,
      stepsCompleted: 0,
      stepsSkipped: 0,
      hintsUsed: 0,
      bonusEarned: 0,
      completedBy: null,
      timeTaken: null,
      completedAt: null
    }))
  };

  heists.set(heistId, heist);

  res.json({
    heistId,
    missionId: heist.missionId,
    dashboardUrl: `/dashboard/${heistId}`,
    rooms: rooms.map(r => ({
      roomNumber: r.roomNumber,
      inviteLink: r.inviteLink
    }))
  });
});

// Get heist details
app.get('/api/heist/:heistId', (req, res) => {
  const { heistId } = req.params;
  const heist = heists.get(heistId);

  if (!heist) {
    return res.status(404).json({ error: 'Heist not found' });
  }

  res.json(heist);
});

// Get specific room details
app.get('/api/heist/:heistId/room/:roomNumber', (req, res) => {
  const { heistId, roomNumber } = req.params;
  const heist = heists.get(heistId);

  if (!heist) {
    return res.status(404).json({ error: 'Heist not found' });
  }

  const room = heist.rooms.find(r => r.roomNumber === parseInt(roomNumber));

  if (!room) {
    return res.status(404).json({ error: 'Room not found' });
  }

  res.json({ 
    heistId, 
    room,
    heist: {
      missionId: heist.missionId,
      hostName: heist.hostName
    }
  });
});

// Delete heist
app.delete('/api/heist/:heistId', (req, res) => {
  const { heistId } = req.params;
  
  if (!heists.has(heistId)) {
    return res.status(404).json({ error: 'Heist not found' });
  }
  
  heists.delete(heistId);
  
  res.json({ success: true, message: 'Heist deleted successfully' });
});

// Get all heists (for listing)
app.get('/api/heists', (req, res) => {
  const heistList = Array.from(heists.values()).map(h => ({
    heistId: h.heistId,
    heistName: h.heistName,
    hostName: h.hostName,
    createdAt: h.createdAt,
    status: h.status,
    roomCount: h.rooms.length,
    completedRooms: h.rooms.filter(r => r.missionStatus === 'COMPLETED').length
  }));
  
  res.json(heistList);
});

// Socket.io real-time events
io.on('connection', (socket) => {
  console.log('New client connected:', socket.id);

  // Join a specific heist room
  socket.on('join-room', ({ heistId, roomNumber, userName }) => {
    const heist = heists.get(heistId);

    if (!heist) {
      socket.emit('error', { message: 'Heist not found' });
      return;
    }

    const room = heist.rooms.find(r => r.roomNumber === parseInt(roomNumber));

    if (!room) {
      socket.emit('error', { message: 'Room not found' });
      return;
    }

    // Check if room is locked
    if (room.locked) {
      socket.emit('room-locked', { 
        message: 'This room is locked. Mission already in progress.' 
      });
      return;
    }

    // Add participant if not already present
    if (!room.participants.find(p => p.id === socket.id)) {
      room.participants.push({
        id: socket.id,
        name: userName || `Agent-${socket.id.substring(0, 4)}`
      });
    }

    // Join socket room
    socket.join(`heist-${heistId}-room-${roomNumber}`);

    // Send mission status to the joining user
    socket.emit('mission-status', {
      status: room.missionStatus,
      readyParticipants: room.readyParticipants || [],
      locked: room.locked
    });

    // Notify all clients in this room
    io.to(`heist-${heistId}-room-${roomNumber}`).emit('room-update', {
      roomNumber,
      participants: room.participants,
      missionStatus: room.missionStatus
    });

    // Also notify organizer dashboard
    io.to(`heist-${heistId}-dashboard`).emit('heist-update', heist);
  });

  // Join organizer dashboard
  socket.on('join-dashboard', ({ heistId }) => {
    const heist = heists.get(heistId);

    if (!heist) {
      socket.emit('error', { message: 'Heist not found' });
      return;
    }

    socket.join(`heist-${heistId}-dashboard`);
    socket.emit('heist-update', heist);
  });

  // Mission ready event
  socket.on('ready-for-mission', ({ heistId, roomNumber, userName }) => {
    const heist = heists.get(heistId);
    if (!heist) return;

    const room = heist.rooms.find(r => r.roomNumber === parseInt(roomNumber));
    if (!room || room.missionStatus !== 'WAITING') return;

    // Add to ready list if not already there
    if (!room.readyParticipants.includes(userName)) {
      room.readyParticipants.push(userName);
    }

    // Broadcast updated ready status
    io.to(`heist-${heistId}-room-${roomNumber}`).emit('ready-update', {
      readyParticipants: room.readyParticipants,
      totalParticipants: room.participants.length
    });

    // Check if all participants are ready
    if (room.readyParticipants.length === room.participants.length && room.participants.length > 0) {
      // Start mission automatically
      room.missionStatus = 'STARTED';
      room.locked = true;
      
      io.to(`heist-${heistId}-room-${roomNumber}`).emit('mission-started', {
        message: 'All agents ready. Mission started!'
      });

      // Notify dashboard
      io.to(`heist-${heistId}-dashboard`).emit('heist-update', heist);
    }
  });

  // Abort mission event
  socket.on('abort-mission', ({ heistId, roomNumber, userName }) => {
    const heist = heists.get(heistId);
    if (!heist) return;

    const room = heist.rooms.find(r => r.roomNumber === parseInt(roomNumber));
    if (!room || room.missionStatus !== 'STARTED') return;

    room.missionStatus = 'FAILED';
    
    io.to(`heist-${heistId}-room-${roomNumber}`).emit('mission-aborted', {
      abortedBy: userName,
      message: `Mission aborted by ${userName}. Mission Failed.`
    });

    // Notify dashboard
    io.to(`heist-${heistId}-dashboard`).emit('heist-update', heist);

    console.log(`Mission aborted in room ${roomNumber} by ${userName}`);
  });

  // Puzzle solved event (deprecated - use mission-completed)
  socket.on('puzzle-solved', ({ heistId, roomNumber, solvedBy, timeTaken }) => {
    const heist = heists.get(heistId);
    if (!heist) return;

    const room = heist.rooms.find(r => r.roomNumber === parseInt(roomNumber));
    if (room) {
      room.missionStatus = 'COMPLETED';
    }

    // Broadcast to all participants in the room
    io.to(`heist-${heistId}-room-${roomNumber}`).emit('puzzle-solved', {
      solvedBy,
      timeTaken
    });

    // Optionally notify dashboard
    io.to(`heist-${heistId}-dashboard`).emit('puzzle-solved-notification', {
      roomNumber,
      solvedBy,
      timeTaken
    });

    console.log(`Puzzle solved in room ${roomNumber} by ${solvedBy} in ${timeTaken}s`);
  });

  // Mission completed event
  socket.on('mission-completed', ({ heistId, roomNumber, completedBy, timeTaken, score, stepsCompleted, stepsSkipped, hintsUsed, bonusEarned }) => {
    const heist = heists.get(heistId);
    if (!heist) return;

    const room = heist.rooms.find(r => r.roomNumber === parseInt(roomNumber));
    if (room) {
      room.missionStatus = 'COMPLETED';
      room.score = score || 0;
      room.stepsCompleted = stepsCompleted || 0;
      room.stepsSkipped = stepsSkipped || 0;
      room.hintsUsed = hintsUsed || 0;
      room.bonusEarned = bonusEarned || 0;
      room.completedBy = completedBy;
      room.timeTaken = timeTaken;
      room.completedAt = new Date().toISOString();
    }

    // Broadcast to all participants in the room
    io.to(`heist-${heistId}-room-${roomNumber}`).emit('mission-completed', {
      completedBy,
      timeTaken,
      score
    });

    // Notify dashboard with scoring data
    io.to(`heist-${heistId}-dashboard`).emit('mission-completed-notification', {
      roomNumber,
      completedBy,
      timeTaken,
      score,
      stepsCompleted,
      stepsSkipped,
      hintsUsed,
      bonusEarned
    });

    // Also send updated heist data
    io.to(`heist-${heistId}-dashboard`).emit('heist-update', heist);

    console.log(`Mission completed in room ${roomNumber} by ${completedBy} - Score: ${score}, Time: ${timeTaken}s`);
  });

  // Mission failed event
  socket.on('mission-failed', ({ heistId, roomNumber, reason }) => {
    const heist = heists.get(heistId);
    if (!heist) return;

    const room = heist.rooms.find(r => r.roomNumber === parseInt(roomNumber));
    if (room) {
      room.missionStatus = 'FAILED';
    }

    // Broadcast to all participants in the room
    io.to(`heist-${heistId}-room-${roomNumber}`).emit('mission-failed', {
      reason: reason || 'Mission failed'
    });

    // Notify dashboard
    io.to(`heist-${heistId}-dashboard`).emit('mission-failed-notification', {
      roomNumber,
      reason
    });

    console.log(`Mission failed in room ${roomNumber}: ${reason}`);
  });

  // Handle disconnect
  socket.on('disconnect', () => {
    console.log('Client disconnected:', socket.id);

    // Remove participant from all rooms
    heists.forEach((heist) => {
      heist.rooms.forEach((room) => {
        const index = room.participants.findIndex(p => p.id === socket.id);
        if (index > -1) {
          const participant = room.participants[index];
          room.participants.splice(index, 1);

          // Remove from ready list if present
          if (room.readyParticipants) {
            const readyIndex = room.readyParticipants.indexOf(participant.name);
            if (readyIndex > -1) {
              room.readyParticipants.splice(readyIndex, 1);
            }
          }

          // Notify room
          io.to(`heist-${heist.heistId}-room-${room.roomNumber}`).emit('room-update', {
            roomNumber: room.roomNumber,
            participants: room.participants,
            missionStatus: room.missionStatus
          });

          // Send ready update
          if (room.missionStatus === 'WAITING') {
            io.to(`heist-${heist.heistId}-room-${room.roomNumber}`).emit('ready-update', {
              readyParticipants: room.readyParticipants || [],
              totalParticipants: room.participants.length
            });
          }

          // Notify dashboard
          io.to(`heist-${heist.heistId}-dashboard`).emit('heist-update', heist);
        }
      });
    });
  });
});

// Serve HTML pages
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/dashboard/:heistId', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'dashboard.html'));
});

app.get('/heist/:heistId/room/:roomNumber', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'room.html'));
});

// Start server
server.listen(PORT, () => {
  console.log(`🤖 Cyber Heist server running on port ${PORT}`);
});
