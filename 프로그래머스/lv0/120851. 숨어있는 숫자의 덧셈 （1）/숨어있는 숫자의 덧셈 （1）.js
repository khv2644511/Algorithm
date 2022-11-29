
// function solution(my_string) {
//     return my_string
//         .match(/[0-9]/g)
//         .reduce((a, b) => parseInt(a) + parseInt(b));
// }

function solution(my_string) {
    return Array
            .from(my_string)
            .map(v => +v)
            .filter(v => !Number.isNaN(v))
            .reduce((a,c) => a+c,0)
}