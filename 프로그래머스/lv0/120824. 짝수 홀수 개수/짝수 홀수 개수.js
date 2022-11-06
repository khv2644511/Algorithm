function solution(num_list) {
    let answer = [0, 0]
    for (i of num_list){
        answer[i % 2] += 1
    }
    return answer
}