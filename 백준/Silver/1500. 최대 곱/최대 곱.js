const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// const input = fs.readFileSync('./input.txt').toString().trim().split('\n');

const [S, K] = input.shift().split(' ');

let li = [];
for (let i = 0; i < K; i++) {
    li.push(Math.floor(S / K));
}

for (let i = 0; i < S % K; i++) {
    li[i] += 1;
}

let result = 1;
for (let i of li) {
    result *= i;
}
console.log(result);