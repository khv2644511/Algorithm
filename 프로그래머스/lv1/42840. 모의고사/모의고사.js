function solution(answers) {
  var answer1 = [];
  var answer2 = [];
  var answer3 = [];

  // 수포자 1
  let 수포자1 = [1, 2, 3, 4, 5];
  let 수포자2 = [2, 1, 2, 3, 2, 4, 2, 5];
  let 수포자3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  for (let i = 0; i < answers.length; i++) {
    if (수포자1[i % 수포자1.length] === answers[i]) {
      answer1.push(answers[i]);
    }
    if (수포자2[i % 수포자2.length] === answers[i]) {
      answer2.push(answers[i]);
    }
    if (수포자3[i % 수포자3.length] === answers[i]) {
      answer3.push(answers[i]);
    }
  }

  let score = [answer1.length, answer2.length, answer3.length];

  let maxScore = Math.max(answer1.length, answer2.length, answer3.length);

  let result = [];
  for (let i = 0; i < 3; i++) {
    if (score[i] === maxScore) result.push(i + 1);
  }

  return result;
}