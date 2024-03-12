const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = input[0];
const arrN = input[1];
let orderedArrN = arrN
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b);
const M = input[2];
const arrM = input[3].split(' ');

let orderedObjN = input[1]
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b)
    .reduce((acc, cur) => {
        acc.set(cur, (acc.get(cur) || 0) + 1);
        return acc;
    }, new Map());

let answer = '';

function binary_search(A, key, low, high) {
    if (low <= high) {
        // 항목들이 남아 있으면(종료 조건)
        let middle = ~~((low + high) / 2); // middle 계산, 실수가 아닌 정수여야 하기 때문에 ~~를 사용
        if (key == A[middle]) {
            // 탐색 성공
            return middle; // 중앙 레코드의 인덱스 반환
        } else if (key < A[middle]) {
            // 왼쪽 부분리스트 탐색 -> 순환호출)
            return binary_search(A, key, low, middle - 1);
        } else {
            // 오른쪽 부분리스트 탐색 -> 순환호출
            return binary_search(A, key, middle + 1, high);
        }
    }
    return -1;
}

for (let i = 0; i < M; i++) {
    // 찾으려는 key만큼 순회하니깐 M 만큼
    let low = 0;
    let high = N - 1;
    let key = parseInt(arrM[i]);

    let idx = binary_search(orderedArrN, key, low, high);

    let val = parseInt(orderedArrN[idx]);
    if (idx == -1) {
        answer += '0 ';
        // console.log('0');
    } else {
        answer += `${orderedObjN.get(val)} `;
        // console.log(`${orderedObjN.get(val)}`);
    }
}
console.log(answer);