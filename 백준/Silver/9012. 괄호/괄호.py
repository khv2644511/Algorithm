T = int(input())
for i in range(T):
    stack = []
    isVPS = True
    for char in input():
        if char == '(':
            stack.append(char)
        else:
            if len(stack) > 0:
                stack.pop()
            else:
                isVPS = False
                break

    if len(stack) > 0:
        isVPS = False
    
    print('YES' if isVPS else 'NO')