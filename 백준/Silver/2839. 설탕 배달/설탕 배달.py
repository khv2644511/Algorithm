sugar = int(input())
cnt = 0

if sugar % 5 ==0:
    cnt += int(sugar // 5)
    print(cnt)

else:
    cnt = 0
    while sugar > 0:
        sugar -= 3
        cnt += 1
        if sugar % 5 == 0:
            cnt += int(sugar // 5)
            print(cnt)
            break
        elif sugar == 1 or sugar == 2:
            print(-1)
            break
        elif sugar == 0:
            print(cnt)
            break