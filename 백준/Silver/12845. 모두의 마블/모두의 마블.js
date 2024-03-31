const fs = require('fs');
// const input = fs.readFileSync('./input.txt').toString().trim().split('\n');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = input.shift();

// 3
// 40 30 30
// 골드 최댓값 구하기

let lv_arr = input[0].split(' ').map(Number);

lv_arr.sort((a, b) => b - a);

let max_lv = lv_arr[0];
let gold_sum = 0;
for (let i = 0; i < N - 1; i++) {
    let lv = max_lv;
    lv_arr[i] = lv;
    gold_sum += lv_arr[i] + lv_arr[i + 1];
}

console.log(gold_sum);
