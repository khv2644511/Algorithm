def solution(n):
    list_ = []
    for i in range(2,n):
        if n%i == 1:
            list_.append(i)
    answer = min(list_)
    
    return answer

