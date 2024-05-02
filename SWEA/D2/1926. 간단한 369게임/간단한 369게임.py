n = int(input())
l = 0
m = 0
k = 0

for i in range(1,n+1):
    
    stringfyNum = str(i)

    l = stringfyNum.count('3')
    m = stringfyNum.count('6')
    k = stringfyNum.count('9')

    if l+m+k > 0:
        print('-'*(l+m+k), end=' ')
    else:
        print(stringfyNum, end=' ')
