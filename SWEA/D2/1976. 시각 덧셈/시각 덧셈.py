T = int(input())

for i in range(1, T+1):
    a,b,c,d = map(int, input().split())
    # print(a,b,c,d)

    hour = a+c
    minutes = b+d
    addhour = 0

    if minutes>=60:
        addhour = minutes//60
        minutes = minutes%60
    
    if addhour> 0:
        hour += addhour

    if hour >= 12:
        hour = hour-12

    print(f"#{i} {hour} {minutes}")