T = int(input())

for tc in range(1, T+1):
    N = input()
    isPalin = ''
    isPalin1 = False
    isPalin2 = False
    isPalinAll = False

    if N == ''.join(reversed(N)):
        isPalinAll = True

    else:
        isPalinAll = False

    midIdx = (len(N)-1)//2
    # print(midIdx)
    first = N[:midIdx]
    # firstPalin = ''.join(reversed(first))
    firstPalin = N[midIdx-1 : : -1]

    if first == firstPalin:
        isPalin1 = True
    # print(first, firstPalin, isPalin1)

    end = N[midIdx+1 :]
    endPalin = N[ -1 : midIdx: -1]
    if end == endPalin:
        isPalin2 = True
    # print(end,endPalin)

    if isPalin1 and isPalin2 and isPalinAll:
        isPalin = 'YES'
    else:
        isPalin = 'NO'

    print(f'#{tc} {isPalin}')