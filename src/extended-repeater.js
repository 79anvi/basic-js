const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if (typeof str !== 'string') str = String(str);
  if (Object.getOwnPropertyNames(options).length > 0) {
    addition = '';
    (options.addition !== undefined) ? addition = String(options.addition) : addition = '';
    if (options.additionSeparator !== undefined) {
      addition += options.additionSeparator; 
      lenAS = options.additionSeparator.length;
    } else {addition += '|'; lenAS = 1;}
    if (options.additionRepeatTimes !== undefined && options.additionRepeatTimes > 1) addition = addition.repeat(options.additionRepeatTimes);
    str += addition.slice(0, -lenAS);

    if (options.separator !== undefined) {
      str += options.separator;
      len = options.separator.length;
        } else {str += '+'; len = 1;}
    if (options.repeatTimes !== undefined && options.repeatTimes > 1) str = str.repeat(options.repeatTimes); 
    str = str.slice(0, -len);
  }  
  return str;
};
  