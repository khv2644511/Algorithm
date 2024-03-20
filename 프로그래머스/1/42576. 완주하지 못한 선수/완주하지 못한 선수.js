function solution(participant, completion) {
    var answer = '';
    
    participant.sort();
    completion.sort();
    
    console.log(participant)
    console.log(completion)
    
    for (let i =0; i < participant.length; i++) {
        if(participant[i] !== completion[i]) {
            return answer = participant[i]
            
            // console.log('answer', answer)
        }
    }
    
    return answer;
}


// participant=["mislav", "stanko", "mislav", "ana"]	
// completion=["stanko", "ana", "mislav"]	