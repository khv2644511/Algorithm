function solution(s) {
  var answer = 0;
  let num = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
  };
  Object.entries(num).forEach((element) => {
    s = s.replaceAll(element[1], element[0]);
  });
  return Number(s);
}