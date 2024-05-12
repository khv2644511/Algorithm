T = int(input())

for test_case in range(1, T+1):
    tc = int(input())
    lists = list(map(int, input().split()))
    dic = {}

    for lst in lists:
        if lst not in dic:
            dic[lst] = 0
        else:
            dic[lst] += 1
    answer = [k for k, v in dic.items() if v== max(dic.values())]
    print(f'#{test_case} {max(answer)}')