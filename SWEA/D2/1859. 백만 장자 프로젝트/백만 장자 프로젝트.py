
T = int(input())

for tc in range(1, T+1):
    N = int(input())
    price_list = list(map(int, input().split()))

    answer = 0
    start = 0

    while start < N:
        i_max = start
        for i in range(start+1, N):
            if price_list[i_max] < price_list[i]:
                i_max = i

        for i in range(start, i_max):
            answer += price_list[i_max] - price_list[i]

        start = i_max + 1

    print(f'#{tc} {answer}')