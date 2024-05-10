T = int(input())
for t in range(1, T+1):
    N = int(input())
    el = {2: 0, 3:0, 5:0 , 7:0, 11:0}

    while N!=1:
        for key in el.keys():

            if N % key ==0:
                N = N // key
                el[key] +=1

    answer =' '.join(map(str, el.values()))
    print(f'#{t} {answer}')
