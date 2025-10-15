const Utils = require("../src/Utils");

const unit_test = async () => {
  let failed = false;

  // Test องศาไปฟาเรนไฮต์
  if (Utils.ctof(0) !== 32) {
    console.error("celsiusToFahrenheit test failed !!!!");
    failed = true;
  } else {
    console.log("celsiusToFahrenheit test passed");
  }

  if (Utils.ctof(100) !== 212) {
    console.error("celsiusToFahrenheit test failed !!!!");
    failed = true;
  } else {
    console.log("celsiusToFahrenheit test passed");
  }

  // Test กิโลไปปอนด์
  const kgResult = Utils.kilogramsToPounds(1);
  if (Math.abs(kgResult - 2.20462) > 0.00001) {
    console.error("kilogramToPound test failed !!!!");
    failed = true;
  } else {
    console.log("kilogramToPound test passed");
  }

  // Test กิโลเมตรไปไมล์
  const kmResult = Utils.kmToMiles(1);
  if (Math.abs(kmResult - 0.621371) > 0.00001) {
    console.error("kilometerToMile test failed !!!!");
    failed = true;
  } else {
    console.log("kilometerToMile test passed");
  }

  //Test นาทีไปชั่วโมง
  if (Utils.minutesToHours(120) !== 2) {
    console.error("minutesToHours test failed !!!!");
    failed = true;
  } else {
    console.log("minutesToHours test passed");
  }

  //Test ชั่วโมงไปวัน
  if (Utils.hoursToDays(48) !== 2) {
    console.error("hoursToDays test failed !!!!");
    failed = true;
  } else {
    console.log("hoursToDays test passed");
  }

  //Test นาทีไปวัน
  if (Utils.minutesToDays(2880) !== 2) {
    console.error("minutesToDays test failed !!!!");
    failed = true;
  } else {
    console.log("minutesToDays test passed");
  }

  // Test สกุลเงินไทย ไป ญี่ปุ่น
  try {
    const result = Utils.convertTHBtoJPY(100);
    if (result !== 420) {
      console.error("convertTHBtoJPY test failed (expected 420, got " + result + ")");
      failed = true;
    } else {
      console.log("convertTHBtoJPY test passed");
    }
  } catch (e) {
    console.error("convertTHBtoJPY threw error:", e.message);
    failed = true;
  }

  // สรุป
  if (failed) {
    console.error("\n Some tests failed !!!!");
    process.exit(1);
  } else {
    console.log("\n All tests passed successfullyyy");
    process.exit(0);
  }
};

unit_test();
