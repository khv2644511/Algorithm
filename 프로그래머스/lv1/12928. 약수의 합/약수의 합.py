def solution(n):
    sum = 0
    n = int(n)
    for i in range(1, n+1):
        if (n%i == 0):
            sum += i
    answer = sum
    return answer