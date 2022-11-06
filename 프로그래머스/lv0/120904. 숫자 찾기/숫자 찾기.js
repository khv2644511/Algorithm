function solution(num, k) {
    return (
        num
            .toString()
            .split("")
            .indexOf(String(k)) + 1 || -1
    );
}