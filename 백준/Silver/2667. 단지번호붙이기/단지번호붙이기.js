let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = +input.shift();

input = input.map((arr) =>
    arr
        .trim()
        .split('')
        .map((x) => +x)
);

const visited = [];
for (let i = 0; i < n; i++) {
    visited.push(new Array(n).fill(0));
}

const nX = [0, 0, 1, -1]; // 좌
const nY = [1, -1, 0, 0]; // 상하우좌

let complexes = [];
let houses = 0;

const rangeCheck = (x, y) => {
    if (x < 0 || x >= n || y < 0 || y >= n) return false;
    return true;
};

const BFS = (curX, curY) => {
    const queue = [];
    queue.push([curX, curY]);
    houses = 0;

    while (queue.length) {
        const target = queue.shift();
        curX = target[0];
        curY = target[1];

        if (visited[curX][curY] === 0) {
            visited[curX][curY] = 1;
            houses++;

            for (let i = 0; i < 4; i++) {
                if (rangeCheck(curX + nX[i], curY + nY[i]) && input[curX + nX[i]][curY + nY[i]] === 1) {
                    queue.push([curX + nX[i], curY + nY[i]]);
                }
            }
        }
    }
    complexes.push(houses);
};

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (+visited[i][j] === 0 && +input[i][j] === 1) {
            // 집 위치가 1이고, 방문하지 않은 곳이면 BFS로 검사한다.
            BFS(i, j);
        }
    }
}

complexes.sort((a, b) => a - b);
let answer = [complexes.length, ...complexes];
console.log(answer.join('\n'));
