function solution(n, times) {
    let low = 1; // MaxH가 가질 수 있는 최솟값
    let high = Math.max(...times) * n; // time 가질 수 있는 최댓값
    times.sort((a, b) => a - b);

    let answer = 0;
    while (low <= high) {
        let middle = ~~((low + high) / 2);
        let people = 0;
        for (let time of times) {
            people += ~~(middle / time);
            if (people >= n) break;
        }

        if (people >= n) {
            high = middle - 1;
            answer = middle;
        } else {
            low = middle + 1;
        }
    }
    return answer;
}
// console.log(solution(6, [7, 10]));