def solution(sides):
    정렬 = sorted(sides)
    return 1 if 정렬[2] < 정렬[0] + 정렬[1] else 2