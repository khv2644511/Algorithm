T = int(input())

for tc in range(1, T+1):
    N = int(input())
    arr = [[0 for j in range(N)] for i in range(N)]
    # print(arr)
    for k in range(N):
        arr[k][0] = 1

    for i in range(1,N):
        for j in range(1, N):
            arr[i][j] = arr[i-1][j-1] + arr[i-1][j]

    print(f'#{tc}')

    for i in range(N):
        ans = [val for key, val in enumerate(arr[i]) if val != 0  ]
        print(' '.join(map(str, ans)))