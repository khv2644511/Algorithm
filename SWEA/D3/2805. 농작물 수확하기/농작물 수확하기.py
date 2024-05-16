T = int(input())

for test_case in range(1, T + 1):
    N = int(input())
    arr = []

    for i in range(N):
        arr.append(list(map(int, input())))

    mid = N //2
    # print(mid)
    answer = 0

    # 가운데 기준 위쪽만 더하기
    for i in range(N//2):
        answer += sum(arr[i][mid-i:mid+i +1])

    # 가운데
    answer += sum(arr[mid])

    # 가운데 기준 아래 행 더하기
    for j in range(N//2):
        answer += sum(arr[N-j-1][mid-j : mid+j+1])

    print(f'#{test_case} {answer}')