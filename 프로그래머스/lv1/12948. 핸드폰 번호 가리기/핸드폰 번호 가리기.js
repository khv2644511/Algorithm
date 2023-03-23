function solution(phone_number) {
  var answer = "";
  let phoneArr = phone_number.split("");
  let lastNum = phoneArr.splice(phone_number.length - 4);
  let startNum = phoneArr.splice(0, phone_number.length - 4);
  answer = Array(startNum.length).fill("*").concat(lastNum);
  answer = answer.join("");
  return answer;
}