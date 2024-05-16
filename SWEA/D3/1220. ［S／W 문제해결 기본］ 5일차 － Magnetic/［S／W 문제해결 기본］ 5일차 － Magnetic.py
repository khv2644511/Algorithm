for test_case in range(10):
    N = int(input())

    arr = [list(map(int, input().split())) for _ in range(N)]

    col_arr = [[arr[j][i] for j in range(N)] for i in range(N)]
    count = 0

    for i in range(N):
        state = 0
        for j in range(N):
            if col_arr[i][j] == 1:
                state = 1
            if col_arr[i][j] == 2 and state == 1:
                count += 1
                state = 0

    print(f'#{test_case+1} {count}')