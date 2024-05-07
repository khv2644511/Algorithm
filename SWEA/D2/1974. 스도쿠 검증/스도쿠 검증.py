T = int(input())

for t in range(1, T+1):
    answer = 1
    arr = []

    for j in range(1,10):
        lst = list(map(int, input().split()))
        arr.append(lst)


    # 행 확인
    for row in arr:
        if len(set(row)) !=9:
            answer = 0
            break

    # 열 확인
    for col in range(9):
        column = [arr[row][col] for row in range(9)]
        if len(set(column)) !=9:
            answer = 0
            break

    # 각 3x3 확인
    for i in range(0, 9, 3):
        for j in range(0, 9, 3):
            check3x3List = []   
            # 3x3 부분 배열 생성
            square = [arr[x][y] for x in range(i, i + 3) for y in range(j, j + 3)]
            if len(set(square)) !=9:
                answer = 0
                break


    print(f'#{t} {answer}')