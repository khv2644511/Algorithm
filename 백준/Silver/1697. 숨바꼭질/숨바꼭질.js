const fs = require('fs');
// const input = fs.readFileSync('./input.txt').toString().trim();
const input = fs.readFileSync('/dev/stdin').toString().trim();
let [N, K] = input.split(' ').map(Number);

const visited = Array(100001).fill(false);

function bfs(v) {
    let queue = [];
    queue.push([v, 0]); // 초기 정점과 깊이(0)을 함께 큐에 추가

    while (queue.length !== 0) {
        const [cur, depth] = queue.shift();

        if (cur === K) {
            console.log(depth);
            return; // 목표 정점에 도달하면 함수 종료
        }

        visited[cur] = true; // 현재 정점 방문 처리

        for (let next of [cur - 1, cur + 1, cur * 2]) { // 가능한 모든 이동 시도
            if (next >= 0 && next <= 100000 && !visited[next]) {
                queue.push([next, depth + 1]); // 방문하지 않은 정점만 큐에 추가
                visited[next] = true; // 바로 방문 처리하여 중복 방지
            }
        }
    }
}

bfs(N);
