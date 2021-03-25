const CustomError = require("../extensions/custom-error");

module.exports = function transform(/*arr*/) {
  throw new CustomError('Not implemented');/*
  try {
    len = arr.length;    
    if (!Array.isArray(arr) && len === 0) throw new Error;     
    console.log(arr);
    console.log('------------------------------');
    //  rules = ['--discard-next', '--discard-prev', '--double-next', '--double-prev'];
   //   check = arr.find(e => e === rules[0] || rules[1] || rules[2] ||rules[3]);
/*
 2) doesn't affect simple arrays
[ '--discard-prev', 1, 2, 3 ]
------------------------------
      3) basic sequence interactions work well
[ 1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5 ]
------------------------------
      4) advanced sequence interactions work well
[ '-1': '--discard-next' ]
------------------------------
      5) control sequences work properly
[ '-1': '--double-prev' ]
------------------------------
[ '--double-prev', [ 'somebody', 'told', 'me' ], '--double-next' ]
------------------------------
[ '--double-prev', true, '--double-next', 22, 'GHI', '--double-prev' ]
------------------------------
*//*
      i = 0;
      res = [];
      indexes = [];
      while (i < len) {

      }
        /*
* `--discard-next` исключает следующий за ней элемент исходного массива из преобразованного массива.
* `--discard-prev` исключает предшествующий ей элемент исходного массива из преобразованного массива.
* `--double-next` удваивает следующий за ней элемент исходного массива в преобразованном массиве.
* `--double-prev` удваивает предшествующий ей элемент исходного массива в преобразованном массиве.
        */
   /*
        if (arr[i] === '--discard-next') {
//          arr.splice(i, 2);
          indexes.push(i);
          i += 2;
        } else if (arr[i] === '--discard-prev') {
 //         arr.splice(i - 1, 2);
          indexes.push(i);
          i -= 2;
        } else if (arr[i] === '--double-next'){            
 //         arr[i] = arr[i + 1];
          indexes.push(i);
          res.push(arr[i + 1]);
          res.push(arr[i + 1]);          
          i += 2;
        } else if (arr[i] === '--double-prev'){
 //         arr[i] = arr[i - 1];
            indexes.push(i);
            res.push(arr[i - 1]);
            res.push(arr[i - 1]);          
            i -= 2;
        } else {
          res.push(arr[i]);
          i++;
        }
      }
     console.log('res=' + res);
      return res;

  } catch (e) {
    throw e;
  } */ 
}
