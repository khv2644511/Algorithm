function solution(array, commands) {
    var answer = [];
    for (let command of commands) {
        let [i, j, k ] = command
        let slicedArray = array.slice(i-1, j)
        let sortedArray = slicedArray.sort((a,b) => a - b)
        let target = sortedArray.slice(k-1 , k)
        answer.push(...target)
        
    }
    return answer;
}