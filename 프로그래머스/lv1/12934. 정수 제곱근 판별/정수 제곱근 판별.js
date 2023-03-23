function solution(n) {
  var result = 0;
  var n = Math.sqrt(n);
  console.log(n);
  result = Number.isInteger(n) ? Math.pow(n + 1, 2) : -1;
  return result;
}