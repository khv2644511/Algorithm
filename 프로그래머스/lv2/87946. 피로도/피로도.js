function solution(k, dungeons) {
  var answer = 0;
  // 방문했는지 확인하기 위한 배열
  const visited = Array.from({ length: dungeons.length }, () => false);

  dfs(0, k);

  function dfs(index, k) {
    for (let i = 0; i < dungeons.length; i++) {
      // 남은 피로도가 최소필요피로도보다 크거나 같다면
      if (!visited[i] && k >= dungeons[i][0]) {
        visited[i] = true;
        dfs(index + 1, k - dungeons[i][1]);
        visited[i] = false;
      }
    }
    answer = Math.max(answer, index);
  }

  return answer;
}