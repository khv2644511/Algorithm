T = int(input())
for t in range(1,T+1):
    N = int(input())

    speed = 0
    distance= 0
    for i in range(N):
        n = input()
        # print(n)
        if len(n)!=1:
            a, b = map(int, n.split())
            if a ==1: # 가속
                speed += b
            else: # 감속
                if speed < b:
                    speed= 0
                else:
                    speed -=b

            distance += 1*speed

        else:
            distance += 1*speed

    print(f'#{t} {distance}')