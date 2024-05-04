n = int(input())

for i in range(1, n+1):
    n, k = map(int, input().split())

    arr = []
    for j in range(n):
        lst = list(map(int, input().split()))
        arr.append(lst)



    result= 0
    searchStr = '1' *k
    #  가로 개수세기
    for a in range(n):
        string = ''.join(map(str, arr[a]))

        searchList = string.split('0')
        # print(searchList)
        
        result += searchList.count(searchStr)


    # 세로 개수세기
    for a in range(n):
        colArr = []
        colStr = ''
        for b in range(n):
            colStr += str(arr[b][a])
        searchColList = colStr.split('0')

        # print(searchColList)
        result += searchColList.count(searchStr)

    print(f'#{i} {result}')