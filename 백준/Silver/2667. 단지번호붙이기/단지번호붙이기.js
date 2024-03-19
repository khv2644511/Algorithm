let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let N = input.shift();

let graph = input.map((el) => {
    return el.split('').map(Number);
});

let visited = Array.from({ length: N }, () => Array.from({ length: N }, () => 0));
let answer = [];

function RangeCheck(x, y) {
    if (x < 0 || x >= N || y < 0 || y >= N) return false;
    return true;
}
function BFS(i, j) {
    let queue = [];
    queue.push([i, j]);
    visited[i][j] = 1;
    // count++;
    let count = 1;

    let Xn = [0, 0, -1, 1];
    let Yn = [1, -1, 0, 0];

    while (queue.length) {
        let target = queue.shift();

        let CurX = target[0];
        let CurY = target[1];

        for (let i = 0; i < 4; i++) {
            if (RangeCheck(CurX + Xn[i], CurY + Yn[i]) && graph[CurX + Xn[i]][CurY + Yn[i]] == 1 && !visited[CurX + Xn[i]][CurY + Yn[i]]) {
                visited[CurX + Xn[i]][CurY + Yn[i]] = 1;
                queue.push([CurX + Xn[i], CurY + Yn[i]]);
                count++;
            }
        }
    }
    answer.push(count);
}

for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        if (!visited[i][j] && graph[i][j] == 1) {
            BFS(i, j);
        }
    }
}
console.log(answer.length);
console.log(answer.sort((a, b) => a - b).join('\n'));
