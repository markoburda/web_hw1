// ### 2. **Average Word Length**
// ​
// Create an average word calculator function. The function must take in text and return the number of the average word length. **Ignore punctuation when counting the length.**

function avgWordLengthCalc(str){
  str = str.replace(/[\.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
  str = str.split(" ");
  var cnt = 0;
  for(var i = 0; i < str.length; ++i){
    cnt += str[i].length;
  }
  res = cnt/str.length;
  return res;
} 

// avgWordLengthCalc("q w e r t y.") // 1.00
// avgWordLengthCalc("The reduce method executes a reducer function.") // 5.57
// avgWordLengthCalc("callback is called, accumulator!") // 6.75
// avgWordLengthCalc("") // 0