const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// const input = fs.readFileSync('./input.txt').toString().trim().split('\n');

let inputArr = input[0].split('').map(Number);
let answer = -1;

// 내림차순 정렬
inputArr.sort((a, b) => b - a);

// // 0이 없는 경우는 return -1
// if (!inputArr.includes(0)) {
//     console.log(answer);
//     return;
// }
// // 맨처음이 0인 경우 => 0만 있는 경우
// if (inputArr[0] === 0) {
//     console.log(answer);
//     return;
// }
const sum = inputArr.reduce((acc, cur) => acc + cur, 0);
if (sum % 3 == 0 && inputArr.includes(0)) {
    answer = inputArr.join('');
} else {
    answer;
}

console.log(answer);
