const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

for (let i = 1; i <= input[0]; i++) {
  let x = input[i].split(" ");
  console.log(parseInt(x[0]) + parseInt(x[1]));
}