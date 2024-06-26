const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = Number(input[0]);
let arr = new Array(n + 1);
for (let i = 0; i < n; i++) {
  arr[i + 1] = input[i + 1].split(" ").map(Number);
}
arr.sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]));
let cur = arr[0][1];
let ans = 1;
for (let i = 1; i < n; i++) {
  if (arr[i][0] >= cur) {
    cur = arr[i][1];
    ans++;
  }
}
console.log(ans);