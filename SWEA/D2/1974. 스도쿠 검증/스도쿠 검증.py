T = int(input())

for tc in range(1, T+1):
    arr = [list(map(int, input().split())) for i in range(9)]
    line = [[arr[j][i] for j in range(9)] for i in range(9)]
    # print(line)
    answer = 1

    for i in range(9):
        set_list = set(arr[i])
        if len(set_list) != 9:
            answer = 0

    for i in range(9):
        set_list = set(line[i])
        if len(set_list) != 9:
            answer = 0

    for a in range(0, 9, 3):
        for b in range(0, 9, 3):
            lst = []
            for c in range(3):
                for d in range(3):
                    lst.append(arr[a+c][b+d])
            # print(tc, len(set(lst)))
            if len(set(lst)) != 9:
                answer = 0

    print(f'#{tc} {answer}')