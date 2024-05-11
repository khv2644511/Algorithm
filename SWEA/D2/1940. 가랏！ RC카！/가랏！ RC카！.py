T = int(input())
 
for case in range(1, T+1):
    count = int(input())
    distance = 0
    acc = 0
     
    for _ in range(count):
        command = list(map(int, input().split()))
        if command[0] == 1:
            acc += command[1]
        elif command[0] == 2:
            acc = max(0, acc - command[1])
         
        distance += acc
     
    print(f"#{case} {distance}")