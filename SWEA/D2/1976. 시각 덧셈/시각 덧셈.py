
T = int(input())
 
for i in range(1, T+1):
    a,b,c,d = map(int, input().split())
    # print(a,b,c,d)

    hour = a + c
    minutes = b + d

    if minutes > 59:
        hour += minutes // 60
        minutes = minutes % 60
    if hour % 12 == 0:
        hour = 12
    elif hour > 12:
        hour = hour % 12

    print(f"#{i} {hour} {minutes}")