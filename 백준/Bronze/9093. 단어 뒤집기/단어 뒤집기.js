const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const size = input.shift();

for (let i = 0; i < size; i++) {
    let result = [];

    let inputArr = input[i].split(' ');

    for (let j = 0; j < inputArr.length; j++) {
        let stack = [];
        let reverse = [];

        let str = inputArr[j];
        for (let k = 0; k < str.length; k++) {
            stack.push(str[k]);
        }

        while (stack.length > 0) {
            reverse.push(stack.pop());
        }

        result.push(reverse.join(''));
    }
    console.log(result.join(' '));
}