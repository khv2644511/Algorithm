def solution(progresses, speeds):
    answer = []
    day = 0  # 배포까지 걸리는 시간
    count = 0  # 그날 배포되는 기능의 수
    
    while progresses:
        # 첫 번째 기능이 100% 이상이 될 때까지 일수 증가
        if (progresses[0] + day * speeds[0]) >= 100:
            progresses.pop(0)
            speeds.pop(0)
            count += 1
        else:
            if count > 0:  # 배포할 기능이 있다면
                answer.append(count)
                count = 0  # 배포된 후에는 count 초기화
            day += 1  # 첫 번째 기능이 100%에 도달하지 않았다면 다음 날로 넘어감
            
    if count > 0:  # 마지막으로 남은 기능 배포
        answer.append(count)
    
    return answer

# 함수 실행 예
# print(solution([93, 30, 55], [1, 30, 5]))
