T = int(input())

for tc in range(1, T+1):
    string = input()
    answer = 0

    first_str = string[0]
    for i in range(1, len(string)):
        if string[i] == first_str:
            if string[:i] == string[i:2*i]:
                break

    answer = len(string[:i])

    print(f'#{tc} {answer}')