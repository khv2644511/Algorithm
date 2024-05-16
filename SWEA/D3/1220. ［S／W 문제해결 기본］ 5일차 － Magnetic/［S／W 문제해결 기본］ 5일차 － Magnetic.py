for test_case in range(10):
    N = int(input())

    arr = [list(input().split()) for _ in range(N)]
    col_arr = [[arr[j][i] for j in range(N)] for i in range(N)]
    count = 0

    for k in range(N):
        while '0' in col_arr[k]:
            col_arr[k].remove('0')
        line = ''.join(col_arr[k])

        for idx in range(len(line)-1):
            if line[idx: idx+2] == '12':
                count +=1

    print(f'#{test_case+1} {count}')