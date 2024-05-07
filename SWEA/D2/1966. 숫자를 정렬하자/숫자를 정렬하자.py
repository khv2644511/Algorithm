T = int(input())

for i in range(1, T+1):
    N = int(input())

    lst = list(map(int, input().split()))
    lst.sort()
    print(f'#{i} {" ".join(map(str, lst))}')
