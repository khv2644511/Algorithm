for tc in range(10):
    dump = int(input())
    lsts = list(map(int, input().split()))
    answer = 0
    # print(lsts)
    # print(lsts[37])
    for i in range(dump):
        if max(lsts) - min(lsts) == 0 or  max(lsts) - min(lsts) ==1:
            break
        max_height = max(lsts)
        min_heigt = min(lsts)

        lsts[lsts.index(max_height)] -= 1 # 최댓값 인덱스를 찾아 해당 값에서 -1
        lsts[lsts.index(min_heigt)] += 1 # 최댓값 인덱스를 찾아 해당 값에서 -1

        answer = max(lsts) - min(lsts)

    print(f'#{tc+1} {answer}')