function solution(n, computers) {
  let answer = 0;
  const length = computers.length;
  const visited = Array.from({ length: n }, () => false);

  function dfs(index) {
    visited[index] = true;

    for (let i = 0; i < length; i++) {
      if (computers[index][i] && !visited[i]) {
        dfs(i);
      }
    }
  }

  for (let i = 0; i < length; i++) {
    if (!visited[i]) {
      dfs(i);
      answer++;
    }
  }

  return answer;
}

let n = 3;
let computers = [
  [1, 1, 0],
  [1, 1, 0],
  [0, 0, 1],
];
console.log(solution(n, computers));
