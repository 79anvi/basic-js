const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  cH = {turns: 0, seconds: 0};
  cH.turns = 2 ** disksNumber - 1;
  cH.seconds = Math.floor((cH.turns / turnsSpeed) * 3600);
  return cH;
};
