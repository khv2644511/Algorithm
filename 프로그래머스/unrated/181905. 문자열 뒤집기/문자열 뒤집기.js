function solution(my_string, s, e) {
  let chars = my_string.split(''); // 문자열을 문자 배열로 변환
  let reversed = chars.slice(s, e + 1).reverse(); // 뒤집을 범위 내 문자열을 추출하고 뒤집음
    console.log(reversed)
  chars.splice(s, e - s + 1, ...reversed); // 추출한 부분을 뒤집은 문자열로 대체
  return chars.join(''); // 문자 배열을 문자열로 변환하여 반환
}