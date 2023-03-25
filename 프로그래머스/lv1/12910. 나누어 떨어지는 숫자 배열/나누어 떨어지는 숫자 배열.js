function solution(arr, divisor) {
  var answer = [];
  answer = arr.filter((v) => v % divisor === 0);
  return answer.length
    ? answer.sort((a, b) => {
        return a - b;
      })
    : [-1];
}