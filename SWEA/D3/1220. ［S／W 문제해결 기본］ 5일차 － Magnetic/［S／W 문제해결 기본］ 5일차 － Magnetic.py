for test_case in range(10):
    N = int(input())

    arr = [list(input().split()) for _ in range(N)]

    # print(arr)

    col_arr = [[arr[j][i] for j in range(N)] for i in range(N)]
    # print(col_arr)
    count = 0

    for k in range(N):
        while '0' in col_arr[k]:
            col_arr[k].remove('0')
            # line = col_arr[k].remove('0')
        line = ''.join(col_arr[k])
        # print(line)
        # for findStr in re.finditer('12', line):
        #     # print(findStr.start())
        #     count +=1

        for idx in range(len(line)-1):
            if line[idx: idx+2] == '12':
                count +=1
            # print(line[idx:2])

    print(f'#{test_case+1} {count}')