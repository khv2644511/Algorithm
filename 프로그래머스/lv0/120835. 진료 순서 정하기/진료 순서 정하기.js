function solution(emergency) {
    var answer = [];
    let sorted = [...emergency].sort((a,b) => b-a)
    answer= emergency.map((v) => sorted.indexOf(v)+1)
    return answer;
}

// [3, 76, 24]

// [76, 24, 3]