T = int(input())

for i in range(1, T+1):
    N = int(input())

    # for j in range(N):
    #     lst = list(map(int, input().split()))
    #     arr.append(lst)
    arr = [list(map(str, input().split())) for j in range(N)]

    rotateArr = []
    for a in range(0, N):
        rotate90 =''
        for b in range(0 ,N):
            rotate90 += arr[N-1-b][a]
        rotateArr.append(rotate90)

        rotate180 = ''
        for c in range(0 ,N):
            rotate180 += arr[N-1-a][N-1-c]
        rotateArr.append(rotate180)

        rotate270 = ''
        for c in range(0 ,N):
            rotate270 += arr[c][N-1-a]
        rotateArr.append(rotate270)


    # print(rotateArr)
    print(f'#{i}')
    for k in range(len(rotateArr)):
        print(rotateArr[k], end=' ')
        if k %3==2:
            print()