module.exports = function check(str, bracketsConfig) {
  function isPair(sym1, sym2){
    let br = false;
    bracketsConfig.forEach(element => {
      if ((element[0] === sym1) && (element[1] === sym2)) {
        br = true;
      }
    });
    return br;
  }
function removeBrackets(pos){
  let buffer = '';
  for (let i = 0; i < pos; i++){
    buffer = buffer + str[i];
  }
  for (let i = pos + 2; i < str.length; i++){
    buffer = buffer + str[i];
  }
  return buffer;
}
let i = 0;
let res = false;
let found = false;const len = str.length;
for (let n = 0; n < len; n++){
  search(0);
  function search (i){
    if (i >= str.length) {
      return res;
    }
    if (isPair(str[i], str[i+1])) {
      found = true;
      str = removeBrackets(i);
    } else {
      search (i+1);
    }
  }
}
if (str.length === 0) {
  return true;
} else {
  return false;
}
}
