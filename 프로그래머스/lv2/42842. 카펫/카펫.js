function solution(brown, yellow) {
  var answer = [];
  // yellow로 만들 수 있는 가로가 긴 사각형
  let x = [];
  for (let y = 3; y <= brown; y++) {
    if ((yellow + brown) % y === 0) {
      let x = (yellow + brown) / y;
      if ((x - 2) * (y - 2) === yellow) {
        return [x, y];
      }
    }
  }
}