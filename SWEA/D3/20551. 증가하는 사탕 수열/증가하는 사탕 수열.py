T = int(input())

for tc in range(1,T+1):
    a,b,c = map(int, input().split())
    lst = [a,b]

    arr= [c]
    answer = 0

    if b ==1 or c ==1:
        answer = -1
    elif a<b<c:
        answer =0
    else:
        for i in list(reversed(lst)):
            while arr[-1] <= i:
                i -=1
                answer +=1
            arr.append(i)
    print(f'#{tc} {answer}')
