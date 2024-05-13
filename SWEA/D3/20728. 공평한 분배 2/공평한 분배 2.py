
T = int(input())

for tc in range(T):
    N, K = map(int, input().split())
    N_lst = list(map(int, input().split()))

    sorted_lst = sorted(N_lst)

    min_diff = float('inf')

    for i in range(N - K + 1):
        diff = sorted_lst[i + K - 1] - sorted_lst[i]
        min_diff = min(min_diff, diff)

    print(f"#{tc+1} {min_diff}")