
#import sys
#sys.stdin = open("input.txt", "r")

T = int(input())
# 여러개의 테스트 케이스가 주어지므로, 각각을 처리합니다.
n = 1
for test_case in range(1, T + 1):
    lst = list(map(int, input().split()))
    sum = 0
    for i in lst:
        if i % 2 ==1: 
            sum += i
        
    print(f"#{n} {sum}")
    n += 1
