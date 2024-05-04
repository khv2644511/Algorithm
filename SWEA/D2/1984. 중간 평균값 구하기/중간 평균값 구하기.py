
n = int(input())

for i in range(1, n+1):
    lst = list(map(int, input().split()))

    minNum = min(lst)
    maxNum = max(lst)

    lst.remove(minNum)
    lst.remove(maxNum)

    print(f'#{i} {round(sum(lst)/8)}')