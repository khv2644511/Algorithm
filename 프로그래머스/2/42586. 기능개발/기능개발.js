function solution(progresses, speeds) {
    var answer = [];
    
    let day = 0; // 일 카운트
    let count = 0; // 기능 완료 수 카운트
    
    while(progresses.length !== 0) { // 모든 작업이 끝날 때까지
        if(100 <= progresses[0] + speeds[0] * day) { // 첫번째 작업 완료면
            progresses.shift(); // 작업목록에서 제거
            speeds.shift(); // 작업 속도도 같이 제거
            count ++; // 기능 완료이므로 +1 증가
        } else {
            if(count>0) answer.push(count)

            day ++ // 작업이 100 미만이라면 다음날로
            count = 0; // count 다시 세줘야하니깐 0으로 초기롸
        }
    }
    if(count>0) answer.push(count)


    return answer;
}