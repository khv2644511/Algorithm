T = int(input())
S = [50000,10000,5000,1000,500,100,50,10]

for tc in range(1, T+1):
    price = int(input())
    answer = ''
    for i in S:
        count = 0
        answer += str(price // i) + ' '
        price = price % i

    print(f'#{tc}')
    print(f'{answer}')