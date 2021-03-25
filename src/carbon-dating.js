const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sA) {
 if (typeof sA !== 'string') return false;
 sA = Number.parseFloat(sA);
 if (Number.isNaN(sA) || sA > 15 || sA <= 0) return false;
 return Math.ceil(Math.log(MODERN_ACTIVITY/sA)/(0.693/HALF_LIFE_PERIOD));
};
