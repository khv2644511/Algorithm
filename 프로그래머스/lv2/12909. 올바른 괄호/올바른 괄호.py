def solution(s):
    올바른_괄호 = []
    vps = True
    for i in s:
        if i == '(':
            올바른_괄호.append(i)

        elif i == ')':
            if len(올바른_괄호) > 0:
                올바른_괄호.pop()
            else:
                vps = False

    if len(올바른_괄호) == 0 and vps == True:
        print('True')
        return True
    else:
        print('false')
        return False