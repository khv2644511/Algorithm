def solution(x):
    answer = True
    arr_sum = sum(map(int, str(x)))
    if x % arr_sum == 0:
        return True
    else:
        return False