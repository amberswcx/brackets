module.exports = function check(str, bracketsConfig) {
  let stack = [];

  for (let i = 0; i <= str.length; i++) {
    for (let brackets of bracketsConfig) {
      if (brackets.includes(str[i])) {

        stack.push(str[i]);
        if (stack.slice(-2).join('') === brackets.join('')) {
          stack.pop();
          stack.pop();
        }

      }
    }
  }

  return (stack.length === 0)
}