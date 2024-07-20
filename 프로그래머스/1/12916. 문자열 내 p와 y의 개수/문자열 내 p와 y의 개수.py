def solution(s):
    answer = True

    count_p = s.lower().count('p')
    count_y = s.lower().count('y')
    
    if (count_p != count_y):
        answer = False

    return answer