function minutesToHours(minutes) {
  return minutes / 60;
}

function hoursToDays(hours) {
  return hours / 24;
}

function minutesToDays(minutes) {
  return minutes / (60 * 24); 
}

module.exports = { minutesToHours, hoursToDays, minutesToDays };
