grades = ['A+', 'A0', 'A-', 'B+', 'B0', 'B-', 'C+', 'C0', 'C-', 'D0']

t = int(input())
for tc in range(t):

  n,k = map(int,input().split())
  arr = []
  
  for i in range(n):
    mid, final, assign = map(int,input().split())
    score = mid*0.35 + final * 0.45 + assign * 0.2
    arr.append(score)

  target = arr[k-1]
  arr.sort(reverse=True)
  rate = n//10
  ratio_score = arr.index(target) // rate
  print('#{} {}'.format(tc+1, grades[ratio_score]))