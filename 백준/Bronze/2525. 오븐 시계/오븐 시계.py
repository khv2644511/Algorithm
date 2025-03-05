H,M = map(int, input().split())
neededTime = int(input())
# print(H,M)
# print(neededTime)

isTrue = True
totalMin = M + neededTime
while isTrue:
    if totalMin >= 60:
        totalMin -= 60
        H += 1
        if H ==24:
            H=0
    else:
        M = totalMin
        isTrue=False
print(f"{H} {M}")