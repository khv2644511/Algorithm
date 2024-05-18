T = int(input())

for tc in range(1, T + 1):
    N, K = map(int, input().split())
    arr = [list(map(int, input().split())) for _ in range(N)]
    line = [[arr[j][i] for j in range(N)] for i in range(N)]
    # print(line)
    result = 0
    searchStr = '1' * K

    #  가로 개수세기
    for i in range(N):
        string = ''.join(map(str, arr[i]))
        searchList = string.split('0')
        result += searchList.count(searchStr)

    # 세로 개수세기
    for i in range(N):
        string = ''.join(map(str, line[i]))
        searchList = string.split('0')
        result += searchList.count(searchStr)

    print(f'#{tc} {result}')