function solution(n, wires) {
    var answer = -1;
    // for (let i=0; i<n-1; i++) {
    //     let [x,y] = 
    // }
    let graph = Array.from({length:n+1}, (_,idx) => [])
    
    for (let wire of wires) {
        let [from, to] = wire;
        graph[from].push(to)
        graph[to].push(from)
    }
    console.log(graph)
    let maxLen = 0;
    let idx= 0;
    for (let i=0; i< n-1; i++) {
        let len = graph[i].length // 길이 저장

        if(maxLen <= len) {
            maxLen = len   // 최대 길이 저장, 이때 해당 인덱스에서 자른다.
            idx = i
        }
    }
    // 그 다음에 자른 간선 기준으로 각각 몇개 노드를 가지는지 어떻게 알까??
    // idx = 4면 4번째 노드랑 연결된 [3,5,6,7]이 있는데, 이것들을 하나하나 자르면서 노드가 몇개인지 더해주기?
    let cutNode = graph[idx];
    
    console.log('idx',idx)
    console.log('cutNode',cutNode)
    
    
    
    return answer;
}