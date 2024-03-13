let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const size = parseInt(input[0]);
const X = input[1].split(' ').map(Number);

const orderedX = input[1]
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b);
const set = new Set(orderedX);
const uniqueX = [...set];

let result = [];

for (let i = 0; i < size; i++) {
    let arr = uniqueX;
    let key = X[i];
    let low = 0;
    let high = uniqueX.length;
    let idx = binary_search(arr, key, low, high);
    result.push(idx);
}

function binary_search(arr, key, low, high) {
    if (low <= high) {
        let middle = ~~((low + high) / 2);

        if (arr[middle] == key) {
            return middle;
        } else if (arr[middle] > key) {
            return binary_search(arr, key, low, middle - 1);
        } else {
            return binary_search(arr, key, middle + 1, high);
        }
    }
    return -1;
}

console.log(result.join(' '));