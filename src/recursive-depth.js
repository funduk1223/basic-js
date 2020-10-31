
const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {   

  calculateDepth(arr, depth = 1,  depthArr = [1]) {
    arr.forEach(element => {
      if (Array.isArray(element)) {
        depthArr.push(depth+1);
        this.calculateDepth(element, depth+1, depthArr);
      }
    });
    return depthArr.sort((a, b) => b - a)[0]
  }
}

