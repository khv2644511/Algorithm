T = int(input())

for tc in range(1, T+1):
    N = int(input())
    arr = [list(map(int, input().split())) for i in range(N)]
    line = [[arr[j][i] for j in range(N)] for i in range(N)]
    # print(line)
    answer = []

    for i in range(N):
        answer.append(line[i][::-1])
        # print(line[i][::-1])
    for i in range(N):
        answer.append(arr[::-1][i][::-1])
        # print(arr[::-1][i][::-1])
    for i in range(N):
        answer.append(line[::-1][i])
        # print(line[::-1][i])

    maxrix = [[0 for i in range(N)] for j in range(N)]


    print(f'#{tc}')
    for a in range(N):
        for i in range(0, len(answer) , N):
            print(''.join(map(str, answer[i+a])),end=' ')
        print()