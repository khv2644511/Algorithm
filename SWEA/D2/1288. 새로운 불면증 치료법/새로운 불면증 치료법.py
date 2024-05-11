T = int(input())

for test_case in range(1,T+1):
    dic = {0: 0, 1:0, 2:0, 3:0 , 4:0, 5:0, 6: 0, 7:0, 8:0, 9:0}
    N = int(input())
    k = 0 # 양을 다 셌을때의 횟수

    while sum(dic.values()) < 10:
        k += 1
        lst = list(str(N*k))
        uniqueList = set(lst)
        for unique in uniqueList:
            if dic[int(unique)] >=1:
                continue
            else:
                dic[int(unique)] += 1
        
    print(f'#{test_case} {k*N}')