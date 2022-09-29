def solution(n):
    answer = sorted(str(n), reverse=True)
    answer = list(map(int, answer))
    answer = int(''.join(map(str, answer)))
    return answer