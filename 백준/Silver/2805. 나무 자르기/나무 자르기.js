const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input.shift().split(' ');
const trees = input[0]
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b);

function solve(arr, M) {
    let start = 0;
    let end = arr[arr.length - 1];
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        let sum = 0;
        for (let x of arr) {
            if (x > mid) sum += x - mid;
        }

        if (sum >= M) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    return start - 1;
}

console.log(solve(trees, M));