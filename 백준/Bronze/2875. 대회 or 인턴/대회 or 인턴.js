const fs = require('fs');

let [N, M, K] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
// let [N, M, K] = fs.readFileSync('./input.txt').toString().trim().split(' ').map(Number);
// console.log(N, M, K);

// let max = Math.max(N, M);
// console.log(max);
let team = 0;

if (N < 2 || M < 1) {
    return team;
}

while (N >= 2 && M >= 1 && N + M - 3 >= K) {
    N -= 2;
    M--;
    team++;
}

console.log(team);