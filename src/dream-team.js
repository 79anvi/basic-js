const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  
  if (!Array.isArray(members)) return false;
  len = members.length;
  if (len === 0) return false;
  dreamTeam = members.filter(e => typeof e === 'string').map(el => el.trim().toUpperCase()).sort().map(elem => elem.substr(0,1)).join('');  
  return dreamTeam;
};
