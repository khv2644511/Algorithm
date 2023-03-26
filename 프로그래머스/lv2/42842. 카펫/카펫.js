function solution(brown, yellow) {
  // 최소 높이는 3 이상이 됨
  for (let y = 3; y <= brown; y++) {
    // 전체 높이가 될 수 있는 y를 구함
    if ((yellow + brown) % y === 0) {
      // 전체 높이를 통해 가로를 구함
      let x = (yellow + brown) / y;
      if ((x - 2) * (y - 2) === yellow) {
        return [x, y];
      }
    }
  }
}