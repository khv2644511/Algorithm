T = int(input())
for test_case in range(1, T+1):
    N = int(input())

    price = [50000,10000,5000,1000,500,100,50,10]
    count = []

    for i in range(len(price)):
        if N >= price[i]:
            count.append(N//price[i])
            N = N % price[i]
        else:
            count.append(0)
        

    print(f'#{test_case}')
    print(' '.join(map(str, count)))