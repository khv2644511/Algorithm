const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
//const input = fs.readFileSync('./input.txt').toString().trim().split('\n');

// console.log(input)
let answer = [];
let result = []

let N = input.shift();
// console.log(N)

let arr = input.map((el) => {
    return el.split(' ');
});

for (let el of arr) {
    let todo = el[0]
    if (todo === 'push') {
        answer.push(el[1])
    } else if (todo == 'pop') {
        // pop: 스택에서 가장 위에 있는 정수를 빼고, 그 수를 출력한다. 만약 스택에 들어있는 정수가 없는 경우에는 -1을 출력한다.
        if (answer.length) {
            let pop_el = answer.pop()
            result.push(pop_el)
            // console.log(pop_el)
        } else {
            result.push(-1)
            // console.log(-1)
        }
    } else if (todo=='size') {
        // size: 스택에 들어있는 정수의 개수를 출력한다.
        // console.log(answer.length)
        result.push(answer.length)
    } else if (todo =='empty') {
        // empty: 스택이 비어있으면 1, 아니면 0을 출력한다.
        if (answer.length) {
            // console.log(0)
            result.push(0)
        } else {
            // console.log(1)
            result.push(1)

        }
    } else if (todo=='top') {
        // top: 스택의 가장 위에 있는 정수를 출력한다. 만약 스택에 들어있는 정수가 없는 경우에는 -1을 출력한다.
        if (answer.length) {
            // console.log(answer[answer.length - 1])
            result.push(answer[answer.length - 1])
        } else {
            // console.log(-1)
            result.push(-1)
        }

    }
}

console.log(result.join('\n'));
