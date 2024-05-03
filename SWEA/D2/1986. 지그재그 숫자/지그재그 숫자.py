T = int(input())

for i in range(1, T+1):
    n = int(input())

    sum = 1
    for j in range(2,n+1):

        if j%2==0:
            sum -= j
        elif j%2 !=0:
            sum += j
    print(f'#{i} {sum}')
