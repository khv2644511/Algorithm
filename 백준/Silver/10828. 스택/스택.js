const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const n = input[0];
input.shift();

let arr = [];
let result = [];

input.forEach((el) => {
    const [명령어, num] = el.trim().split(' ');
    if (명령어 === 'push') {
        arr.push(num);
    } else if (명령어 === 'top') {
        // arr.length !== 0 ? console.log(arr[arr.length - 1]) : console.log('-1');
        arr.length !== 0 ? result.push(arr[arr.length - 1]) : result.push('-1');
    } else if (명령어 === 'size') {
        // console.log(arr.length);
        result.push(arr.length);
    } else if (명령어 === 'empty') {
        // arr.length !== 0 ? console.log('0') : console.log('1');
        arr.length !== 0 ? result.push('0') : result.push('1');
    } else if (명령어 === 'pop') {
        // arr.length === 0 ? console.log(-1) : console.log(arr.pop());
        arr.length === 0 ? result.push(-1) : result.push(arr.pop());
    }
});

console.log(result.join('\n'));

