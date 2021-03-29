const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
    
  constructor (option) {
    this.option = option;    
    this.ABC = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  
  }
 
  encrypt(str, key) {  
    if (str === undefined || key === undefined) throw Error('Error');
    str = str.toUpperCase();      
    key = key.toUpperCase();        
    let lenStr = str.length;
    let lenKey = key.length;
    let str2 = str.replace(/[^A-Z]/g,'');
    let lenStr2 = str2.length;
    if (lenKey != lenStr2) {
      key = key.repeat(Math.ceil((lenStr2 - lenKey)/lenKey + lenKey)).slice(0,lenStr2);    
    }      
    let temp = 0;
    let k = 0;
    let res = '';
      for (let i = 0; i < lenStr; i++) { 
       if (this.ABC.indexOf(str[i]) !== -1) {
         temp = this.ABC.indexOf(str[i]) + this.ABC.indexOf(key[k]);
         k++;
         if (temp > 25) temp = Math.abs(temp - 26);
         res += this.ABC[temp];  
       } else res += str[i];
      } 
    if (this.option === false) res = res.split('').reverse().join('');  
    /*
    console.log(str);  
    console.log(str2);  
    console.log(key);  
    console.log(res);  
    console.log('-----------------------');
    */
    return res;
  }    
  decrypt(str, key) {
    if (str === undefined || key === undefined) throw Error('Error');
    str = str.toUpperCase();     
    key = key.toUpperCase();        
    let lenStr = str.length;
    let lenKey = key.length;
    let str2 = str.replace(/[^A-Z]/g,'');
    let lenStr2 = str2.length;
    if (lenKey != lenStr2) {
      key = key.repeat(Math.ceil((lenStr2 - lenKey)/lenKey + lenKey)).slice(0,lenStr2);    
    }
    
    let temp = 0;
    let k = 0;
    let res = '';
      for (let i = 0; i < lenStr; i++) { 
       if (this.ABC.indexOf(str[i]) !== -1) {
         temp = this.ABC.indexOf(str[i]) - this.ABC.indexOf(key[k]);
         k++;
         if (temp < 0) temp = Math.abs(temp + 26);
         res += this.ABC[temp];
       } else res += str[i];
      }
   if (this.option === false) res = res.split('').reverse().join(''); 
   /*
   console.log(str);  
    console.log(str2);  
    console.log(key);  
    console.log(res);  
    console.log('-----------------------');
    */
    return res;
  } 
}

module.exports = VigenereCipheringMachine;
