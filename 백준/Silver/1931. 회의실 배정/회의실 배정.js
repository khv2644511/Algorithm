const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// const input = fs.readFileSync('./input.txt').toString().trim().split('\n');

let N = input.shift();

let arr = input.map((el) => {
    // console.log(el);
    return el.split(' ').map(Number);
});

// 길이가 1인 경우 같은 값으로 채우기
// for (let i = 0; i < N; i++) {
//     if (arr[i].length == 1) {
//         arr[i].push(arr[i][0]);
//     }
// }

// 끝나는 시간에 대해서 오름차순 정렬
// arr[1]이 같을 경우 arr[0] 기준으로 오름차순 정렬
arr.sort((a, b) => {
    if (a[1] === b[1]) {
        return a[0] - b[0];
    } else {
        return a[1] - b[1];
    }
});

// console.log(arr);
let last_time = arr[0][1];
// console.log(last_time);
let count = 1;

for (let i = 1; i < N; i++) {
    // 시작 시간이 앞 회이의 끝나는 시간보다 크거나 같다면 카운트 +1
    if (arr[i][0] >= last_time) {
        count++;
        last_time = arr[i][1]; // 끝난 시간 업데이트
    }
}
console.log(count);

