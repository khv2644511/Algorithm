const fs = require('fs');
// const input = fs.readFileSync('./input.txt').toString().trim().split('\n');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let N = input.shift();
let arrP = input[0]
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b);

let sum = 0;
let result = [];

for (let i = 0; i < N; i++) {
    sum += arrP[i];
    // result = sum + arrP[i];
    result.push(sum);
    // console.log(sum);
}
console.log(result.reduce((acc, cur) => acc + cur));