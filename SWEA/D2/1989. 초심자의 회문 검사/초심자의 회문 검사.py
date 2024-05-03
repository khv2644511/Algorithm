n = int(input())

for i in range(1, n+1):
    str = input().strip()

    reversed_letter = ''
    for letter in reversed(str):
        reversed_letter += letter
    reversed_letter.strip()

    if str == reversed_letter:
        print(f'#{i} 1')
    else:
        print(f'#{i} 0')