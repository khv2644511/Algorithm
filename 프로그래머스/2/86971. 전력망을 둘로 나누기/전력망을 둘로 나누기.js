
function solution(n, wires) {
    let graph = Array.from({ length: (n + 1) }, (_, idx) => []);

    for (let wire of wires) {
        let [from, to] = wire;
        graph[from].push(to);
        graph[to].push(from);
    }
    let minAnswer = Number.MAX_SAFE_INTEGER;
    for (let wire of wires) {
        let [a, b] = wire;
        // 송전탑 개수의 차이가 작을수록 비슷하게 나눠 가진 것이므로 최솟값을 담아준다.
        let result = Math.abs(BFS(a, b, graph,n) - BFS(b, a, graph));
        if (result < minAnswer) minAnswer = result;
    }

    console.log('minAnswer', minAnswer);

    return minAnswer;
}

function BFS(root, exception, graph,n) {
    let visited = Array.from({ length: n + 1 }, () => false); // 방문 처리 초기화해주기

    count = 0;
    let queue = [];
    queue.push(root);
    visited[root] = true;

    count++;

    while (queue.length) {
        let shiftItem = queue.shift();

        graph[shiftItem].forEach((el) => {
            if (!visited[el] && el !== exception) {
                queue.push(el);
                count++;

                visited[el] = true;
            }
        });
    }
    return count;
}
