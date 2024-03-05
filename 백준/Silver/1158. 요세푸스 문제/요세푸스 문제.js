const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split(' ');

let [n, k] = input;
let queue = [];
let result = [];

for (let i = 1; i <= n; i++) {
    queue.push(i);
}

let count = 1;
while (queue.length) {
    const shiftItem = queue.shift(); // 1
    if (count % k === 0) {
        result.push(shiftItem);
    } else {
        queue.push(shiftItem);
    }
    count += 1;
}

console.log(`<${result.join(', ')}>`);

