function ctof(celsius) {
  return (celsius * 9) / 5 + 32;
}

function kilogramsToPounds(kilograms) {
  const poundsPerKilogram = 2.20462;
  return kilograms * poundsPerKilogram;
}

function kmhToMs(kmh) {
  return kmh * (1000 / 3600);
}

function minutesToHours(minutes) {
  return minutes / 60;
}

function hoursToDays(hours) {
  return hours / 24;
}

function minutesToDays(minutes) {
  return minutes / (60 * 24); 
}

function convertTHBtoJPY(thbAmount, rate = 4.2) {
  if (typeof thbAmount !== "number" || thbAmount < 0) {
    throw new Error("Invalid THB amount");
  }
  if (typeof rate !== "number" || rate <= 0) {
    throw new Error("Invalid exchange rate");
  }
  return Number((thbAmount * rate).toFixed(2));
}

module.exports = {
  ctof,
  kilogramsToPounds,
  kmhToMs,
  minutesToHours, hoursToDays, minutesToDays,
  convertTHBtoJPY
};
