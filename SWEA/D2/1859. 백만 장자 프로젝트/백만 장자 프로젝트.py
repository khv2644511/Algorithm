
T = int(input())

for tc in range(1, T+1):
    N = int(input())
    price_list = list(map(int, input().split()))
    price_list.reverse()
    answer = 0

    max = price_list[0]
    for price in price_list:
        if price > max:
            max = price
        else:
            answer += max - price

    print(f'#{tc} {answer}')