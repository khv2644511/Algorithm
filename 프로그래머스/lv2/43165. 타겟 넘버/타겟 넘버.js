function solution(numbers, target) {
  let answer = 0;
  
  const dfs = (index, sum) => {
    if (index === numbers.length) { // 모든 인덱스를 다 돌았을 때
      if (sum === target) { // 타겟과 같은 경우의 수를 찾은 경우
        answer++;
      }
      return;
    }
    
    dfs(index+1, sum+numbers[index]); // 현재 인덱스에 해당하는 값을 더하는 경우
    dfs(index+1, sum-numbers[index]); // 현재 인덱스에 해당하는 값을 빼는 경우
  }
  
  dfs(0, 0); // 인덱스와 합 초기화
  return answer;
}
