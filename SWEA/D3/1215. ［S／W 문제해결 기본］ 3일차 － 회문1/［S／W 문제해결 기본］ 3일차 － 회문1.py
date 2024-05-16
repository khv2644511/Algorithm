for test_case in range(10):
    N = int(input())

    arr = [list(input()) for _ in range(1,9)]
    # print(arr)
    count = 0

    # 행 회문
    for i in range(8):
        reversed_arr = list(reversed(arr[i]))
        # print('reversed_arr',reversed_arr)
        for j in range(8-N+1):
            # print(arr[i][j:j+N] )
            # print(reversed_arr[8-N : 8-j+1])
            if arr[i][j:j+N] == reversed_arr[8-N-j : 8-j]:
                count +=1
    # print('count', count)

    # print('--')

    # 열 회문
    col_arr = []
    for k in range(8):
        arr2 = []
        for l in range(8):
            arr2.append(arr[l][k])
        col_arr.append(arr2)

    # print(col_arr)
    for m in range(8):
        reversed_col_arr = list(reversed(col_arr[m]))
        # print('reversed_arr',reversed_arr)
        for n in range(8 - N + 1):
            # print(arr[i][j:j+4])
            # print(reversed_arr[4-j : 8-j])
            # if arr[i][j:j+N] == reversed_arr[8-N-j : 8-j]:

            if col_arr[m][n:n + N] == reversed_col_arr[8-N- n: 8 - n]:
                count += 1
                # print('--')
    # print('-----------------------')
    print(f'#{test_case+1} {count}')