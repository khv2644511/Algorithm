
T = int(input())

for i in range(1, T+1):
    N,M = map(int, input().split())

    a = list(map(int, input().split()))
    b = list(map(int, input().split()))

    idx= 0
    longerList =[]
    shorterList = []
    if len(a) > len(b):
        idx = len(a) - len(b)
        longerList = a
        shorterList = b
    else:
        idx = len(b) - len(a)
        longerList = b
        shorterList = a

    maxSum =0
    for j in range(idx+1):
        sum = 0
        for k in range(len(shorterList)):
            sum += shorterList[k] * longerList[k+j]
        if sum > maxSum:
            maxSum = sum
    print(f'#{i} {maxSum}')