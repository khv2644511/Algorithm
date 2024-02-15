const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
let anw = ''


rl.on('line', function (line) {
    input = line.split(' ');
    // console.log(input)
}).on('close', function () {
    str = input[0];
    n = Number(input[1]);
    for (let i=1; i<n+1 ; i++) {
        anw = anw + str
    }
        console.log(anw)
    
});