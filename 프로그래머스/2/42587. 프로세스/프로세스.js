function solution(priorities, location) {
    var answer = 0;
    let idx = [];
    let count = 0;
    let target = priorities[location]
    
    for (let i=0; i < priorities.length ; i++) {
        idx.push(i) 
    }
    while(priorities.length) {
        let max = Math.max(...priorities) // 3
        if(priorities[0] !== max) {
            let shiftItem = priorities.shift();
            let shiftIdx=  idx.shift();
            priorities.push(shiftItem);
            idx.push(shiftIdx);
            
        } else if(priorities[0] == max) {
            let shift = priorities.shift();
            let shiftIdx = idx.shift();
            
            count ++

           if(location== shiftIdx) {
                return count
            }
             

        }
    }
    return count;
}

