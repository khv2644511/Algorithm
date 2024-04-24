const fs = require('fs');
//const input = fs.readFileSync('./input.txt').toString().trim().split('\n');
 const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input.shift().split(' ').map(Number);
let graph = Array.from(Array(N), () => Array(M).fill(0));
let visited = Array.from(Array(N), () => Array(M).fill(0));

// 그래프 생성
for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
        if (input[i][j] == 1) {
            graph[i][j] = 1;
        }
    }
}

let moveX = [0, 0, 1, -1];
let moveY = [1, -1, 0, 0];

function rangeCheck(x, y) {
    if (x < 0 || x >= N || y < 0 || y >= M) return false;
    return true;
}

function bfs(x, y, pathLength) {
    let queue = [];

    queue.push([x, y, pathLength]);
    visited[0][0] = 1;

    // 상하좌우

    while (queue.length !== 0) {
        let [curX, curY, pathLength] = queue.shift();

        if (curX == N - 1 && curY == M - 1) {
            console.log(pathLength);
            break;
        }

        for (let i = 0; i < 4; i++) {
            // 오왼아래위 검사하면서 1이고, N,M 범위 내에 있고, 방문안했는지 확인
            // 이동, 칸수 + 1
            if (rangeCheck(curX + moveX[i], curY + moveY[i]) && graph[curX + moveX[i]][curY + moveY[i]] == 1 && visited[curX + moveX[i]][curY + moveY[i]] == 0) {
                queue.push([curX + moveX[i], curY + moveY[i], pathLength + 1]);
                visited[curX + moveX[i]][curY + moveY[i]] = 1;
            }
        }
    }
}

bfs(0, 0, 1);
