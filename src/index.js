module.exports = function check(str, bracketsConfig) {
  // your solution
  //start task
  if ((str < 1) || (str.length % 2 !== 0)) {
      return false;
  }
  let openBrackets  = [];
  let closeBrackets = [];

  for (let i = 0; i < bracketsConfig.legth; i++) {
    openBrackets.push(bracketsConfig[i][0]);
    closeBrackets.push(bracketsConfig[i][1]);
  };




}
