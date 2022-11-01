import re
def solution (n, arr1, arr2):
    answer =[]
    tran_answer =[]
    li = list(zip(arr1, arr2))

    for i,j in li:
        answer.append(i|j)
    
    for k in answer:
        bit= format(k,'b').rjust(n,'0')
        tran_answer.append(bit)
    answer =[]

    for t in tran_answer:
        a = re.sub('1','#',t)
        d = re.sub('0',' ',a)
        answer.append(d)      
    return answer