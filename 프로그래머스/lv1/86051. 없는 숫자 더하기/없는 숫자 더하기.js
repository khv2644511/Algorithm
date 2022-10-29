function solution(numbers) {
    var all = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    var answer = 0;
    for (let i of all) {
      if (numbers.includes(i) === false) {
        answer += i;
      }
}
    return answer;
}
