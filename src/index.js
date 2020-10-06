module.exports = function check(str, bracketsConfig) {
  // your solution
  //start task
  //str =                                  [(])
  //bracketsConfig                               [['(', ')'], ['[', ']']];
  if ((str < 1) || (str.length % 2 !== 0)) {
      return false;
  }
  let openBrackets  = [];
  let closeBrackets = [];

  for (let i = 0; i < bracketsConfig.length; i++) {
    openBrackets.push(bracketsConfig[i][0]);
    closeBrackets.push(bracketsConfig[i][1]);
  };
  //console.log(openBrackets);
  //console.log(closeBrackets);

  let stack = [];
  for (let i = 0; i < str.length; i++) {
    let elem = str[i];
    let indexElem = closeBrackets.indexOf(elem);
    if (indexElem > -1) {
        if ((stack.length !==0) && (stack[stack.length-1] === openBrackets[indexElem])) {
            stack.pop();
        } else {
            stack.push(elem);
        }
    } else {
        stack.push(elem);
    }
  }
  return (stack.length === 0)
}
