/* 356-Day Countdown Timer JavaScript
 * ===================================
 * Simple and effective countdown timer that updates in real-time
 */

console.log('countdown.js script starting...');

// Countdown configuration
const COUNTDOWN_CONFIG = {
  // Target date: Set to a fixed date 365 days from now (July 19, 2026)
  targetDate: new Date('2026-07-19T00:00:00'),
  
  // What happens when timer reaches zero
  onComplete: function() {
    console.log('Countdown completed!');
    document.querySelector('.countdown-title').textContent = 'Event Started!';
    document.querySelector('.countdown-timer').innerHTML = '<div class="time-unit"><span class="time-value">00</span><div class="time-label">Days</div></div>';
  },
  
  // Update interval in milliseconds (100ms for testing)
  updateInterval: 100
};

// DOM elements
const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const millisecondsElement = document.getElementById('milliseconds');

// Format number with leading zero
function formatNumber(num) {
  return num < 10 ? '0' + num : num;
}

// Format milliseconds with leading zeros
function formatMilliseconds(num) {
  if (num < 10) return '00' + num;
  if (num < 100) return '0' + num;
  return num;
}

// Calculate time remaining
function calculateTimeRemaining() {
  const now = new Date().getTime();
  const target = COUNTDOWN_CONFIG.targetDate.getTime();
  const difference = target - now;
  
  if (difference <= 0) {
    // Countdown is complete
    COUNTDOWN_CONFIG.onComplete();
    return null;
  }
  
  // Calculate time units
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);
  const milliseconds = Math.floor((difference % 1000) / 10); // Get centiseconds (0-99)
  
  return { days, hours, minutes, seconds, milliseconds };
}

// Update the display
function updateDisplay() {
  const timeRemaining = calculateTimeRemaining();
  
  if (timeRemaining === null) {
    return; // Countdown completed
  }
  
  // Debug: Log every update for testing
  console.log('Time remaining:', timeRemaining);
  
  // Update DOM elements
  daysElement.textContent = formatNumber(timeRemaining.days);
  hoursElement.textContent = formatNumber(timeRemaining.hours);
  minutesElement.textContent = formatNumber(timeRemaining.minutes);
  secondsElement.textContent = formatNumber(timeRemaining.seconds);
  millisecondsElement.textContent = formatMilliseconds(timeRemaining.milliseconds);
}

// Start the countdown
function startCountdown() {
  console.log('356-Day Countdown Timer started');
  console.log('Target date:', COUNTDOWN_CONFIG.targetDate.toLocaleDateString());
  console.log('Current date:', new Date().toLocaleDateString());
  
  // Initial update
  updateDisplay();
  
  // Set up interval for updates
  setInterval(updateDisplay, COUNTDOWN_CONFIG.updateInterval);
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM loaded, starting countdown...');
  try {
    startCountdown();
    console.log('Countdown started successfully');
  } catch (error) {
    console.error('Error starting countdown:', error);
  }
});

// Export functions for external use
window.CountdownTimer = {
  setTargetDate: function(date) {
    COUNTDOWN_CONFIG.targetDate = new Date(date);
    console.log('New target date set:', COUNTDOWN_CONFIG.targetDate.toLocaleDateString());
  },
  
  setOnComplete: function(callback) {
    COUNTDOWN_CONFIG.onComplete = callback;
  },
  
  getTargetDate: function() {
    return COUNTDOWN_CONFIG.targetDate;
  },
  
  getTimeRemaining: function() {
    return calculateTimeRemaining();
  }
};