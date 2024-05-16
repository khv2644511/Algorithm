for test_case in range(10):
    tc = int(input())
    arr = [list(map(int, input().strip().split())) for _ in range(100)]

    sum_list = []
    for i in range(100):
        sum_list.append(sum(arr[i]))

    for i in range(100):
        col_sum = 0
        for j in range(100):
            col_sum += arr[j][i]
        sum_list.append(col_sum)

    diagonal_sum1 = 0
    diagonal_sum2 = 0
    for i in range(100):
        diagonal_sum1 += arr[i][i]
        diagonal_sum2 += arr[i][99-i]
    sum_list.append(diagonal_sum1)
    sum_list.append(diagonal_sum2)
    print(f'#{tc} {max(sum_list)}')