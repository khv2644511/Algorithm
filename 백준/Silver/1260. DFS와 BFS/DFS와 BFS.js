const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [n, m, v] = input[0].split(' ').map(Number);

let graph = new Array(n + 1); // 정점개수보다 한개 더 많은
for (let i = 0; i < graph.length; i++) {
    graph[i] = [];
}

for (let i = 0; i < m; i++) {
    // 0부터 간선 수 만큼
    let [from, to] = input[i + 1].split(' ').map(Number);
    graph[from].push(to);
    graph[to].push(from);
}
graph.forEach((element) => {
    element.sort((a, b) => a - b); // graph 내 배열 원소 오름차순 정렬
});

let visited = [...Array(n + 1).fill(false)]; // 방문 확인을 위한 변수, 길이는 정점+1

let answerDFS = [];
let answerBFS = [];
const dfs = (graph, v, visited) => {
    //1. 탐색 시작 노드 방문 처리
    visited[v] = true;
    // console.log(v);
    answerDFS.push(v);

    //2. 탐색 노드의 인접 노드 확인
    for (const cur of graph[v]) {
        if (!visited[cur]) {
            dfs(graph, cur, visited);
        }
    }
};

let vtx = Array.from({ length: n + 1 }, (_, index) => index);
function BFS(vtx, graph, v) {
    let n = vtx.length; // 그래프 정점 수
    let visited = [...Array(n).fill(false)]; // 방문 확인을 위한 리스트
    // console.log(visited);
    let queue = []; // queue를 만든다.
    queue.push(v); // 맨 처음에 시작 정점 s만 queue에 넣는다.
    visited[v] = true; // s는 방문했다고 표시한다.

    //queue가 공백일때까지
    while (queue.length !== 0) {
        s = queue.shift(); // 큐에서 정점 s를 꺼내고
        // console.log(vtx[s]);
        answerBFS.push(vtx[s]);

        graph[s].forEach((neighbor) => {
            // s의 인접 정점에 대해 아직 방문하지 않았다면
            if (!visited[neighbor]) {
                queue.push(neighbor); // 큐에 추가
                visited[neighbor] = true; // 방문했다고 표시
            }
        });
    }
}
dfs(graph, v, visited);
BFS(vtx, graph, v);

console.log(answerDFS.join(' '));
console.log(answerBFS.join(' '));