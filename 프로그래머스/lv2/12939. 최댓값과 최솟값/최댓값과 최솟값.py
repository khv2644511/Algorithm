def solution(s):
    p = list(map(int, s.split()))
    max_value = max(p)
    min_value = min(p)
    # answer =(f'{min_value} {max_value}')
    
    # return answer
    return (str(min_value) + " " + str(max_value))
