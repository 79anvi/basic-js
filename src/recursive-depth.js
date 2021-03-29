const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {

  calculateDepth(arr, level = 1, depth = 1) {
    arr.forEach(e => {        
      if (Array.isArray(e)) {  
        level = 1 + this.calculateDepth(e, level);
        if (level > depth) depth = level;        
      } else level = 1;
    })
    return depth;  
}
};

