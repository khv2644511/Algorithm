
T = int(input())

for test_case in range(1, T+1):
    N = int(input())

    a = 0 # 50000
    b = 0 # 10000
    c = 0 # 5000
    d = 0 # 1000
    e = 0 # 500
    f = 0 # 100
    g = 0 # 50
    h = 0 # 10

    if N >= 50000:
        a = N//50000
        N = N% 50000
    
    if N >= 10000:
        b = N//10000
        N = N% 10000

    if N >= 5000:
        c = N//5000
        N = N% 5000

    if N >= 1000:
        d = N//1000
        N = N% 1000

    if N >= 500:
        e = N//500
        N = N% 500

    if N >= 100:
        f = N//100
        N = N% 100

    if N >= 50:
        g = N//50
        N = N% 50

    if N >= 10:
        h = N//10
        N = N% 10

    print(f'#{test_case}')
    print(f'{a} {b} {c} {d} {e} {f} {g} {h}')