function solution(n) {
    return Array(n).fill().map((_, i) => i+1).filter(v => v%2 !==0)
}