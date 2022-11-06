def solution(numbers):
    v = list(sorted(numbers, reverse=True))
    return v[0] * v[1]