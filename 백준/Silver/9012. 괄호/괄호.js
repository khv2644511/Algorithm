const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

input.shift();

for (let i = 0; i < input.length; i++) {
    // console.log(input[i]);
    let vps = input[i];
    let stack = [];
    let result = 'YES';

    for (let j = 0; j < vps.length; j++) {
        // 스택이 full 상태가 아니라면 stack에 괄호를 넣는다
        if (vps[j] === '(') {
            if (stack.length < vps.length) {
                stack.push(vps[j]);
            }
        }
        // ")" 닫는 괄호를 만나면 stack에서 "("여는 괄호를 삭제한다.
        else if (vps[j] === ')') {
            if (stack.length !== 0) {
                // 스택이 비어있지 않으면 삭제한다.
                stack.pop();
            } else if (stack.length === 0) {
                // 1. 닫는 괄호를 만났는데 스택이 비어있음 VPS가 아니다
                // console.log('NO');
                result = 'NO';
            }
        }
    }
    if (stack.length > 0) {
        // console.log('NO');
        result = 'NO'; // 2. 문자열을 다 돌았는데 stack이 남아있다면 VPS가 아님
    }
    console.log(result);
}
// 2. 문자열을 다 돌았는데 stack이 남아있다면 VPS가 아님
// 1. 스택이 비었는데 ")"닫는 괄호가 하나 더 있다면 VPS가 아님

