function add(a, b) {
  return a + b;
}

/**
 * ฟังก์ชันสำหรับแปลงกิโลกรัมเป็นปอนด์
 * @param {number} kilograms - น้ำหนักในหน่วยกิโลกรัม
 * @returns {number} น้ำหนักในหน่วยปอนด์
 */
function kilogramsToPounds(kilograms) {
  const poundsPerKilogram = 2.20462;
  return kilograms * poundsPerKilogram;
}

module.exports = { 
  add,
  kilogramsToPounds 
};