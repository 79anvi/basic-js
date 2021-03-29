const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  try {   
     if (date === undefined) return 'Unable to determine the time of year!'; 

    date2 = new Date(date.getFullYear(), date.getMonth(), date.getDate(),
                     date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds());
                   
    if (date.toISOString() !== date2.toISOString()) throw new Error('Error');        

    seasons = ['winter','winter','spring','spring','spring',
              'summer','summer','summer','autumn','autumn','autumn','winter'];   
               
    return seasons[date.getMonth()];  
  } catch (e) {
    throw e;
  } 
};
