function solution(n) {
  let answer = 0;
  if (n === 1) {
    return (answer = 4);
  }
  if (n === 2) {
    return (answer = -1);
  }
  if (n === 3) {
    return (answer = -1);
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      answer = (i + 1) ** 2;
    } else answer = -1;
  }

  return answer;
}