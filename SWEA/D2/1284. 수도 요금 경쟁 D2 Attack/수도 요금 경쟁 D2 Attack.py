T = int(input())

for test_case in range(1, T+1):
    P, Q, R, S, W = map(int, input().split())

    answer = []

    answer.append(P * W)
    if W <= R:
        answer.append(Q)
    else:
        answer.append(Q + (W-R)*S)

    print(f'#{test_case} {min(answer)}')
