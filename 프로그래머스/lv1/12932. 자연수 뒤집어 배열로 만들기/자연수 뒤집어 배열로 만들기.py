def solution(n):
    answer = []
    n = str(n)
    for i in n:
        answer.append(int(i))
    answer.reverse()
    return answer



n = 12345
n = str(n)
answer = []

for i in n:
    answer.append(int(i))
    
a = list(reversed(answer))
print(a)