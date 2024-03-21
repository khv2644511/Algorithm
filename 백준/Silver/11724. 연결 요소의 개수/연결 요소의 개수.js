const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [N, M] = input.shift().split(' ').map(Number);

let graph = Array.from({ length: N + 1 }, () => []);
let visited = Array.from(Array(N + 1), () => false);

for (let i = 0; i < M; i++) {
    let [from, to] = input[i].split(' ').map(Number);
    graph[from].push(to);
    graph[to].push(from);
}

let count = 0;
function BFS(v) {
    let queue = [];
    queue.push(v);
    visited[v] = true;

    while (queue.length) {
        let shiftItem = queue.shift();
        graph[shiftItem].forEach((el) => {
            if (!visited[el]) {
                queue.push(el);
                visited[el] = true;
            }
        });
    }
    count++;
}

for (let n = 1; n <= N; n++) {
    if (!visited[n]) BFS(n);
}

console.log(count);