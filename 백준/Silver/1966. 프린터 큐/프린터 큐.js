const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let testCaseLength = input.shift();
let result = [];

for (let i = 0; i < input.length; i += 2) {
    let N;
    let targetIdx;
    let priority;
    let 출력;
    let count = 0;
    [N, targetIdx] = input[i].split(' ');
    priority = input[i + 1].split(' ');

    let 문서 = Array.from({ length: N }, (v, i) => i);


    let max = Math.max.apply(null, priority);
    let whileBool = true;
    while (whileBool) {
        max = Math.max.apply(null, priority);
        if (max === parseInt(priority[0])) {
            priority.shift();
            출력 = 문서.shift();
            count++;
        } else {
            priority.push(priority.shift());
            문서.push(문서.shift());
        }
        if (parseInt(targetIdx) === 출력) {
            whileBool = false;
            result.push(count);
        }
    }
}

console.log(result.join('\n'));
