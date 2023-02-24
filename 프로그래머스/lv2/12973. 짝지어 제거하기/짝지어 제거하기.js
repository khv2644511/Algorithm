function solution(s) {
  var answer = 0;
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    stack.push(s[i]);
    // console.log(stack);
    if (stack[stack.length - 1] === stack[stack.length - 2]) {
      stack.pop();
      stack.pop();
      //   console.log(stack.length);
    }
  }
  return stack.length === 0 ? (answer = 1) : (answer = 0);
}