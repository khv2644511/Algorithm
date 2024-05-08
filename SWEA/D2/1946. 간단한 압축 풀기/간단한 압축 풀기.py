
T = int(input())

for t in range(1, T+1):
    N = int(input())

    arr = []
    for i in range(N):
        # print(C,K)
        C, K = map(str, input().split())

        for a in range(int(K)):
            arr.append(C)

    
    # print(arr)
    print(f'#{t}')
    for a in range(1, len(arr) +1):
        print(arr[a-1], end='')
        if a%10 ==0:
            print()
    print()
