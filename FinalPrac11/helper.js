export function formatTime(minutes, seconds) {
  return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
}

export function logEvent(message) {
  console.log(`[LOG] ${new Date().toLocaleTimeString()}: ${message}`);
}