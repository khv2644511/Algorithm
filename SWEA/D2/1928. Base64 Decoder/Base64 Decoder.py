from string import ascii_lowercase
from string import ascii_uppercase

alphabet_upper = list(ascii_uppercase)
alphabet_lower = list(ascii_lowercase)

obj = {}
for i in range(0, len(alphabet_upper)):
    obj[alphabet_upper[i]] = i

for i in range(0, len(ascii_lowercase)):
    obj[ascii_lowercase[i]] = i + 26

for i in range(0, 10):
    obj[str(i)] = i + 52 

obj['+'] = 62
obj['/'] = 63



T = int(input())


for case in range(1, T+1):
    lines = input()
    lst = []
    binStr = '' #2진수 변환한 모든 문자열
    for line in lines:
        num = bin(obj[str(line)])# 2진수 변환
        # print(num[2:].rjust(6,'0'))
        binStr += num[2:].rjust(6,'0')
        # lst.append(obj[line])
    # print(binStr)

    for j in range(0, len(binStr), 8):
        lst.append(binStr[j:j+8]) # 8개씩 끊어서 lst에 담기
    # print(lst)
    answer = ''
    for k in lst:
        answer += chr(int(k, 2))
    print(f'#{case} {answer}')
