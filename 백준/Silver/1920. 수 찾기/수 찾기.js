const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0]);
const M = parseInt(input[2]);

let arrA = input[1]
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b);

let arrM = input[3].split(' ').map(Number);

function binary_search(arr, key, low, high) {
    if (low <= high) {
        let middle = ~~((low + high) / 2);
        if (key == arr[middle]) {
            // 탐색 성공
            return 1; // 중앙 레코드의 인덱스 반환
        } else if (key < arr[middle]) {
            // 왼쪽 부분리스트 탐색 -> 순환호출)
            return binary_search(arr, key, low, middle - 1);
        } else {
            // 오른쪽 부분리스트 탐색 -> 순환호출
            return binary_search(arr, key, middle + 1, high);
        }
    }

    return 0;
}


const answer = arrM.map((v) => {
    return binary_search(arrA, v, 0, N);
});

console.log(answer.join('\n'));
