let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const size = parseInt(input[0]); // N : 주어진 좌표 개수
const X = input[1].split(' ').map(Number); // X1, X2, ... ,Xn
const orderedX = input[1] // uniqueX를 만들기1 - 오름차순 정렬
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b);
const set = new Set(orderedX); // uniqueX 만들기2 - 중복 제거하기
const uniqueX = [...set];
let result = []; // 정답 출력을 위한 변수

// console.log('X', X);
// console.log('orderedX', orderedX);
// console.log('uniqueX', uniqueX);

for (let i = 0; i < size; i++) { // N개 만큼 순회
    let arr = uniqueX; // uniqueX를 탐색
    let key = X[i]; // X는 탐색키
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