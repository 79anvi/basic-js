const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
 
  try {
    
    if (!Array.isArray(arr)) throw new Error;  
    len = arr.length;  
    if (len === 0) return arr;
    i = 0;
    res = [];
    while (i < len) {
        if (arr[i] === '--discard-next') {
          if (i + 2 < len) {
            i += 2;
          } else break;          
        } else if (arr[i] === '--discard-prev') {
          if (i - 1 > 0 && res.length > 0 && arr[i - 2] !== '--discard-next'){
            res.pop();
          }
          i++;
        } else if (arr[i] === '--double-next'){ 
          if (i + 1 <= len && arr[i + 1] !== undefined) {
            res.push(arr[i + 1]);
            res.push(arr[i + 1]);   
            i += 2;                         
          } else break;
        } else if (arr[i] === '--double-prev'){          
          if (i - 1 >= 0 && arr[i - 2] !== '--discard-next') {
            res.push(arr[i - 1]);     
          }
          i++;
        } else {
          res.push(arr[i]);
          i++;
        }
      }
      return res;
  } catch (e) {
    throw e;
  }  
}
