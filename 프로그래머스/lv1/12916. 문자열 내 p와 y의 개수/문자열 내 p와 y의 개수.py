def solution(s):
    answer = True
    s = s.lower()
    if s.count('p') == s.count('y'):
        return True
    elif s.count('p') + s.count('y') == 0:
        return False
    else:
        return False
