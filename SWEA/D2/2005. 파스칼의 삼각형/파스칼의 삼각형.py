T = int(input())


for i in range(1, T+1):
    n = int(input())

    arr = [[0 for j in range(n)] for i in range(n)]
    print(f'#{i}')
    if n==1:
        print(1)
        continue

    for j in range(0, n):
        for k in range(0, j+1):
            # print(i+k, end=' ')
            # lst[j].append(k)
            # print(j, end=' ')
            arr[j][k] = 1
            if arr[j-1][k-1]+arr[j-1][k] > 1:
                arr[j][k]= arr[j-1][k-1]+arr[j-1][k]
            print(arr[j][k]  , end=' ')
        print('')
