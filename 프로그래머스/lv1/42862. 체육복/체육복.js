function solution(n, lost, reserve) {
  var answer = 0;
  // 도난당하지 않은 학생에서 + 빌려받을 수 있는 학생을 더해준다
  // 도난 당하지 않은 학생
  let notStill = n - lost.length;
  // reserve의 원소들에 +- 1을 해서 Lost와 같아지면 +1 해주기
  let canget = [];

  let newLost = [...lost];
  let newReserve = [...reserve];

  for (let i = 0; i < reserve.length; i++) {
    for (let j = 0; j < lost.length; j++) {
      if (reserve[i] === lost[j]) {
        newReserve.splice(newReserve.indexOf(reserve[i]), 1);
        newLost.splice(newLost.indexOf(lost[j]), 1);
        notStill++;
      }
    }
  }
  console.log("reserve", reserve);
  console.log("lost", lost);
  console.log("notStill", notStill);

  newReserve.sort((a, b) => a - b);
  newLost.sort((a, b) => a - b);

  for (let i = 0; i < reserve.length; i++) {
    for (let j = 0; j < lost.length; j++) {
      if (
        newReserve[i] - 1 === newLost[j] ||
        newReserve[i] + 1 === newLost[j]
      ) {
        canget.push(lost[j]);
        newLost.shift();
      }
    }
  }
  console.log("canget", canget);
  console.log("lost", lost);

  answer = canget.length + notStill;

  return answer;
}