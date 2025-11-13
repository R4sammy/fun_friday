// Cyber Heist - Main Client-Side JavaScript

// Modal Management
function showCreateModal() {
    const modal = document.getElementById('createModal');
    modal.classList.add('active');
    document.getElementById('roomCountInput').focus();
}

function closeCreateModal() {
    const modal = document.getElementById('createModal');
    modal.classList.remove('active');
}

// Create New Heist
async function createHeist() {
    const missionId = document.getElementById('missionSelect').value;
    const hostName = document.getElementById('hostNameInput').value.trim();
    const roomCount = parseInt(document.getElementById('roomCountInput').value);

    // Validation
    if (!missionId) {
        alert('⚠️ Please select a mission');
        document.getElementById('missionSelect').focus();
        return;
    }

    if (!hostName) {
        alert('⚠️ Please enter your organizer name');
        document.getElementById('hostNameInput').focus();
        return;
    }

    if (!roomCount || roomCount < 1 || roomCount > 50) {
        alert('⚠️ Please enter a valid number of rooms (1-50)');
        document.getElementById('roomCountInput').focus();
        return;
    }

    // Show loading
    showLoading();

    try {
        const response = await fetch('/api/heist/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                missionId: missionId,
                hostName: hostName,
                roomCount: roomCount
            })
        });

        if (!response.ok) {
            throw new Error('Failed to create heist');
        }

        const data = await response.json();

        // Redirect to dashboard
        window.location.href = data.dashboardUrl;

    } catch (error) {
        console.error('Error creating heist:', error);
        alert('Error creating heist. Please try again.');
        hideLoading();
    }
}

// Join Existing Heist
function joinHeist() {
    const heistId = document.getElementById('heistIdInput').value.trim();

    if (!heistId) {
        alert('Please enter a Heist ID');
        return;
    }

    // Show loading
    showLoading();

    // Verify heist exists
    fetch(`/api/heist/${heistId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Heist not found');
            }
            return response.json();
        })
        .then(heist => {
            // Redirect to dashboard
            window.location.href = `/dashboard/${heistId}`;
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Heist not found. Please check the ID and try again.');
            hideLoading();
        });
}

// Loading Overlay
function showLoading() {
    const overlay = document.getElementById('loadingOverlay');
    if (overlay) {
        overlay.classList.add('active');
    }
}

function hideLoading() {
    const overlay = document.getElementById('loadingOverlay');
    if (overlay) {
        overlay.classList.remove('active');
    }
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Close modal on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeCreateModal();
        }
    });

    // Close modal on background click
    const modal = document.getElementById('createModal');
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeCreateModal();
            }
        });
    }

    // Enter key handlers
    const heistIdInput = document.getElementById('heistIdInput');
    if (heistIdInput) {
        heistIdInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                joinHeist();
            }
        });
    }

    const heistNameInput = document.getElementById('heistNameInput');
    if (heistNameInput) {
        heistNameInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                createHeist();
            }
        });
    }

    const hostNameInput = document.getElementById('hostNameInput');
    if (hostNameInput) {
        hostNameInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                createHeist();
            }
        });
    }

    const roomCountInput = document.getElementById('roomCountInput');
    if (roomCountInput) {
        roomCountInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                createHeist();
            }
        });
    }
});

// Utility: Copy to clipboard with feedback
function copyToClipboard(text, feedbackElement) {
    navigator.clipboard.writeText(text)
        .then(() => {
            if (feedbackElement) {
                const originalText = feedbackElement.textContent;
                feedbackElement.textContent = '✓ Copied!';
                feedbackElement.style.color = 'var(--success-green)';
                
                setTimeout(() => {
                    feedbackElement.textContent = originalText;
                    feedbackElement.style.color = '';
                }, 2000);
            }
        })
        .catch(err => {
            console.error('Failed to copy:', err);
            alert('Failed to copy to clipboard');
        });
}

// Prevent form submission on Enter (if forms are added later)
document.addEventListener('submit', (e) => {
    e.preventDefault();
});
