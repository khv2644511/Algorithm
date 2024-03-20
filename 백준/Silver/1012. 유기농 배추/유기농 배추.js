const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let testCase = parseInt(input.shift());

let graph = [];
let visited = [];
let count = 0;
let M, N, K;
let answer = [];
let idx = 0;

for (let i = 0; i < testCase; i++) {
    answer = []; // answer 초기화
    [M, N, K] = input[idx].split(' ').map(Number);
    // 가로 M=10, 세로 N=8 (10 x 8)배열 만들기
    graph = Array.from(Array(N), () => Array(M).fill(0));
    visited = Array.from(Array(N), () => Array(M).fill(0));

    // console.log(M, N, K);
    idx++;

    for (let j = 0; j < K; j++) {
        // console.log(input[j + 1]);
        let [x, y] = input[idx + j].split(' ').map(Number);
        graph[y][x] = 1;
    }
    idx += K;
    // console.log('graph', graph);

    for (let k = 0; k < N; k++) {
        for (let l = 0; l < M; l++) {
            if (!visited[k][l] && graph[k][l] === 1) {
                BFS(k, l);
            }
        }
    }
    console.log(answer.length);
}

function RangeCheck(x, y) {
    if (x < 0 || x >= N || y < 0 || y >= M) return false;
    return true;
}
function BFS(i, j) {
    let queue = [];
    queue.push([i, j]);

    visited[i][j] = 1; // 방문처리
    count = 1;

    let Xn = [0, 1, 0, -1];
    let Yn = [1, 0, -1, 0];

    while (queue.length) {
        let target = queue.shift();
        let [CurX, CurY] = target;

        for (let i = 0; i < 4; i++) {
            if (RangeCheck(CurX + Xn[i], CurY + Yn[i]) && graph[CurX + Xn[i]][CurY + Yn[i]] == 1 && !visited[CurX + Xn[i]][CurY + Yn[i]]) {
                visited[CurX + Xn[i]][CurY + Yn[i]] = 1;
                count++;

                queue.push([CurX + Xn[i], CurY + Yn[i]]);
            }
        }
    }
    answer.push(count);
}
