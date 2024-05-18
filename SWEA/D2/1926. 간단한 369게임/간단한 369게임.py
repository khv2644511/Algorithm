N = int(input())

# 30 36 39 339
for i in range(1,N+1):
    lst = list(str(i))
    count = 0

    count += lst.count('3') + lst.count('6') + lst.count('9')

    if count>= 1:
        print('-'*count, end=' ')
    else:
        print(i , end=' ')
