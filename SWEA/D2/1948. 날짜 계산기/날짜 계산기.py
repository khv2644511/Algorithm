
T = int(input())
date= {1:31, 2:28, 3:31, 4:30, 5:31, 6:30, 7:31, 8:31, 9:30, 10:31, 11:30, 12:31}

for t in range(1, T+1):
    month1, day1, month2, day2 = map(int, input().split())
    # print(month1, day1, month2, day2)

    sum = 0
    if month1 != month2:
        for i in range(month1+1, month2):
            sum += date[i]
    
        sum += date[month1] - day1 +1 
        sum += day2
    else:
        sum += day2-day1 +1

    print(f'#{t} {sum}')