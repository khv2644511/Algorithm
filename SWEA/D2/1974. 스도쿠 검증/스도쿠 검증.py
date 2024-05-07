T = int(input())
for t in range(1, T+1):
    answer = 1
    arr = []
    for j in range(1,10):
        lst = list(map(int, input().split()))
        arr.append(lst)
        # 행 확인
        for a in range(1,10):
            if lst.count(a)==0  or lst.count(a) >1:
                answer = 0
                break

    # 열 확인
    for a in range(0,9):
        checkColList = []
        for b in range(0,9):
            checkColList.append(arr[b][a])

        for k in range(1,10):
            if checkColList.count(k)==0  or checkColList.count(k) >1:
                answer = 0
                break

    # 각 3x3 부분 배열을 추출하고 출력
    for i in range(0, 9, 3):
        for j in range(0, 9, 3):
            check3x3List = []   
            # 3x3 부분 배열 생성
            for x in range(i, i+3):
                for y in range(j, j+3):
                    # print(f"({x},{y}) {arr[x][y]}")
                    check3x3List.append(arr[x][y])

            # print(check3x3List)
            for k in range(1,10):
                if check3x3List.count(k)==0  or check3x3List.count(k) >1:
                    answer = 0
                    break

    print(f'#{t} {answer}')