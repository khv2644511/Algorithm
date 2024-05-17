N, S = map(int, input().split())
lists = list(map(int, input().split()))
count = 0

for i in range(1<<N):
    subset_num = 0
    for j in range(N):
        if i & (1<<j):
            subset_num += lists[j]
    # if subset_num != S:
    #     continue
    if subset_num == S:
        count += 1

if S == 0:  # s가 0일경우 공집합을 포함하기때문에, 이 경우를 제외한다.
    count -= 1
print(count)