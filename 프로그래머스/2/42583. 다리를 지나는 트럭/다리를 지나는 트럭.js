function solution(bridge_length, weight, truck_weights) {
    var answer = 0;
    
    let 다리를건너는트럭 = Array.from({length: bridge_length}, () => 0);
    let 무게합 = 0 // 다리에 걸린 하중
    
    // 1초가 지나고 대기트럭 첫번째 트럭을 다리에 올린다.
    answer += 1; 
    다리를건너는트럭.shift();
    무게합 += truck_weights[0]; // 대기트럭 첫번째의 무게를 더해준다.
    다리를건너는트럭.push(truck_weights.shift());
    

    // 대기트럭이 남아있는 동안 계속할 것
    while (무게합 > 0) {
        answer += 1;

        
        // 큐를 꺼낸다. 다리를 건너니까 무게에서 현재 트럭의 무게를 뺀다.
        무게합 -= 다리를건너는트럭.shift();
        
        // 현재 다리에 걸린 하중과 그 다음에 올라올 트럭의 무게의 합이 다리가 견딜수 있는 무게라면
        if(truck_weights.length > 0 && 무게합 + truck_weights[0] <= weight) {
            무게합 += truck_weights[0]; // 다음 트럭의 무게를 더해주고
            다리를건너는트럭.push(truck_weights.shift()) // 다리를건너는트럭.push(대기트럭.shift())도가능한지확인
        } else {
            다리를건너는트럭.push(0);
        }
    }
    return answer;
}