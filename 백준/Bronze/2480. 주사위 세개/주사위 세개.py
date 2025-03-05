array = list(map(int, input().split()))
count = {}
money = 0

for value in array:
    if value in count:
        count[value] +=1
    else:
        count[value] = 1

for key, value in count.items():
    if value == 3:
        money = 10000+key*1000
        break
    elif value == 2:
        money = 1000+ key*100
        break
if money == 0:
    money = max(array) * 100
print(money)