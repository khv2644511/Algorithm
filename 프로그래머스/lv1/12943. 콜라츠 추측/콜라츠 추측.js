function solution(num) {
  let answer = 0;
  if (num === 1) {
    return (answer = 0);
  }
  while (num > 1) {
    if (num % 2 === 0) {
      num = num / 2;
      answer += 1;
    } else if (num % 2 === 1) {
      num = num * 3 + 1;
      answer += 1;
    }
    if (answer === 500) {
      return (answer = -1);
    }
    if (num === 1) {
      return answer;
    }
  }
}