def solution (n, arr1, arr2):
    arr1_bin = []
    arr2_bin = []
    for i in arr1:
        a = format(i, 'b').rjust(n, '0')
        arr1_bin.append(a)
    
    for i in arr2:
        a = format(i, 'b').rjust(n, '0')
        a.ljust(len(a), '0')
        arr2_bin.append(a)
        
    solve = []
    path = ''
    for i in range(n):
        path = ''
        for j in range(n):
            if int(arr1_bin[i][j] + arr2_bin[i][j]) == 0:
                # print(' ')
                path += ' '
            else:
                path += '#'
                # print('#')
        solve.append(path)
        answer = solve
        continue
    return answer