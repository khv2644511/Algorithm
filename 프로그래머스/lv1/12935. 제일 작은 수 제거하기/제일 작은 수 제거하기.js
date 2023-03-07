function solution(arr) {
  let sorted = [...arr].sort(function (a, b) {
    return a - b;
  });
  if (arr.length === 1) {
    return (answer = [-1]);
  } else {
    let answer = arr.filter((el) => el !== sorted[0]);
    if (answer.length === 0) {
      return (answer = [-1]);
    }
    return answer;
  }
}