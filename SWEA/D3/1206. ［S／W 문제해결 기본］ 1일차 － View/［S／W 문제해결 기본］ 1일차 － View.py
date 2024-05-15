for tc in range(10):
    N = int(input())
    buildings = list(map(int, input().split()))

    answer = 0
    for i in range(2,N-2):
        if buildings[i] > buildings[i-1] and buildings[i] > buildings[i-2] and buildings[i] > buildings[i +1] and buildings[i] > buildings[i+2]:
            arr = []

            arr.append(buildings[i-1])
            arr.append(buildings[i-2])
            arr.append(buildings[i+1])
            arr.append(buildings[i+2])

            a = buildings[i] - max(arr)
            answer += buildings[i] - max(arr)
    print(f'#{tc+1} {answer}')