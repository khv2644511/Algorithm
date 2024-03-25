function solution(numbers) {
  const strNumbers = numbers.map(String); // 정수 배열을 문자열 배열로 변환
  const sortedNumbers = strNumbers.sort((a, b) => (b + a)-(a + b)); // 문자열 배열을 정렬 (정렬 기준 재정의)
  const answer = sortedNumbers.join(''); // 정렬된 문자열 배열을 이어붙여 문자열로 만듦
  return answer[0] == '0' ? '0' : answer;
}