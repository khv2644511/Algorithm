T = int(input())

for tc in range(1, T + 1):
    N, K = map(int, input().split())
    A = list(map(int, input().split()))

    count = 0

    for i in range(1<<N):
        sub_sum = 0
        for j in range(N):
            if i & (1<< j):
                sub_sum += A[j]

        if sub_sum == K:
            count +=1
    print(f'#{tc} {count}')