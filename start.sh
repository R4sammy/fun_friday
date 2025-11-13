#!/bin/bash

# Cyber Heist - Quick Start Script

echo "🤖 Starting Cyber Heist..."
echo ""

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    echo ""
fi

# Start the server
echo "🚀 Launching server on http://localhost:3000"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""

npm start
