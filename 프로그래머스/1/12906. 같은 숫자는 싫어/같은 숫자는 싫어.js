function solution(arr) {
    var answer = [arr[0]];
    // console.log(answer)

    // arr = [1,1,3,3,0,1,1]
    // answer = [1]
    
    // i=1, 1 !== 1
    // i=2, 1 !== 3 answer = [1,3]
    // i=3, 3 !== 3
    // 
    for (let i=1; i < arr.length; i++) {
        if (answer[answer.length - 1] !== arr[i]) {
            answer.push(arr[i]);
        }
    }

    return answer;
}

solution([1,1,3,3,0,1,1])