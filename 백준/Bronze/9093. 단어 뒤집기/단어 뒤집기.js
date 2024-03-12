let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let len = parseInt(input[0]);
for (let i = 1; i <= len; i++) {
    let words = input[i].split(' ');
    let answer = '';
    for (let word of words) {
        answer += `${word.split('').reverse().join('')} `;
    }
    console.log(answer);
}
