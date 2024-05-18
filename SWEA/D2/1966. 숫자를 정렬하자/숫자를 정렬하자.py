T = int(input())
for tc in range(1, T+1):
    N = int(input())
    lst = list(map(int, input().split()))
    lst.sort()
    answer = ' '.join(map(str, lst))
    print(f'#{tc} {answer}')

    
    