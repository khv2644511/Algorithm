n = int(input())

for i in range(1, n+1):
    N, M = map(int, input().split()) 
    arr = []

    for k in range( 1, N +1):
        arr.append(list(map(int, input().split())))
    

    result= []
    for a in range(N-M+1):
        for b in range(N-M+1):
            sum= 0
            for c in range(M):
                 for d in range(M):

                    sum += arr[a + c][b + d]

            result.append(sum)
    print(f'#{i} {max(result)}')
