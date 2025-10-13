const Utils = require("../src/Utils");

const unit_test = async () => {
    
    // if (Utils.add(2, 3) !== 5) {
    //     console.error(" add test failed");
    //     process.exit(1);
    // }
    let failed = false;

    if (Utils.add(2, 3) !== 5) {
        console.error("add test failed");
        failed = true;
    }

    if (Utils.add(2, 8) !== 5) {
        console.error("add test failed");
        failed = true;
    }

    // if (Utils.add(2, 3) === 5) {
    //     console.log(0);
    // }
    // else {
    //     console.log(1);
    // }

    if (failed) {
        console.error("Some tests failed");
        process.exit(1);
      } else {
        console.log("All tests passed!");
        process.exit(0);
    }
}

unit_test();
