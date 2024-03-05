const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split(' ');

let ans = [];
const [N, K] = input;
const arr = Array.from({ length: N }, (_, index) => index + 1);
let count = K - 1;
while (arr.length !== 0) {
  ans.push(...arr.splice(count, 1));
  count += K - 1;
  if (count >= arr.length) count %= arr.length;
}
console.log(`<${ans.join(', ')}>`);
