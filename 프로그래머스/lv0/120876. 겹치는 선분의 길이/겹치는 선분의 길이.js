function solution(lines){
    // 100이 0, 101은 1
    // 99는 -1, 98은 -2
    let line = Array(201).fill(0) // 0 포함 201개
    for (let [i, j] of lines){
        for(;i < j; i++){
            line[100 + i]++
        }
    }
    return line.filter(v => v >= 2).length
}