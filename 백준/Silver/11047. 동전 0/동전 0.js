const fs = require('fs');
// const input = fs.readFileSync('./input.txt').toString().trim().split('\n');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [N, K] = input.shift().split(' ').map(Number);
// console.log(N, K);

let coins = input.map(Number).sort((a, b) => b - a);
// console.log(coins);

let count = 0;

for (let coin of coins) {
    if (coin > K) continue;
    if (coin <= K) {
        let value = Math.floor(K / coin);
        K -= value * coin;
        count += value;

        if (K === 0) {
            break;
        }
    }
}

console.log(count);
