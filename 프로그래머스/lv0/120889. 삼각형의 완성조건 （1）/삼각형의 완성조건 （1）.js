function solution(sides) {
    정렬 = sides.sort((a, b) => a - b)
    return 정렬[2] < 정렬[0] + 정렬[1] ? 1 : 2;
}