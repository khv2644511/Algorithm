function solution(n) {
    var answer = 0;
    var list_ =[]

    for (var i=1;i<n; i++) {
        if (n%i === 1){
            list_.push(i)
        }
    }
    answer = list_[0]
    return answer;
}

console.log(solution(10))


