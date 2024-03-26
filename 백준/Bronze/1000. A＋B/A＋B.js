const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
// let input = fs.readFileSync('./input.txt').toString().trim().split(' ').map(Number);

// console.log(input);

let [a, b] = input;
console.log(a + b);
