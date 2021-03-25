const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {  
  return [].concat(...backyard).filter(e => e === '^^').length;  
};
