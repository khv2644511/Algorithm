n  = int(input())

for i in range(1, n+1):
    str = input()
    firstStr = str[0]

    count = 0
    for j in range(1, 30):
        count +=1
        if str[j] == firstStr:
            if str[:count] != str[count: count*2]:
                # print(str[count: count*2])
                continue
            print(f"#{i} {len(str[:count])}")
            break
