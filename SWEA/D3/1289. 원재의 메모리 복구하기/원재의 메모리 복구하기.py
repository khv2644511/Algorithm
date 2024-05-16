T = int(input())

for tc in range(1, T+1):
    input_str = list(input())

    startNum = ['0' for _ in range(len(input_str))]
    answer = 0
    for i in range(len(input_str)):
        if input_str[i] != startNum[i]:
            for j in range(i, len(input_str)):
                startNum[j] = input_str[i]
            answer +=1
            if startNum == input_str:
                break

    print(f'#{tc} {answer}')