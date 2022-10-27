function solution(common) {
    var answer = 0;
    var deungcha = common[1] - common[0] === common[2] - common[1];
    if (deungcha) {
      result = common[0] + common.length * (common[1] - common[0]);
    } else {
      result = common[0] * (common[1] / common[0]) ** common.length;
    }
    return result;
}

