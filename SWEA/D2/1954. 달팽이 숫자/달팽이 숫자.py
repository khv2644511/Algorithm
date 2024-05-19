x_move = [0,1,0,-1]
y_move = [1,0,-1,0]
for T in range(int(input())):
    N = int(input())
    arr = [[0]*N for _ in range(N)]
    x,y,d= 0,0,0
    for i in range(1, N*N + 1):
        arr[x][y] = i
        next_x, next_y = x + x_move[d], y + y_move[d]

        if next_x<0 or next_x>=N or next_y<0 or next_y >=N or arr[next_x][next_y] !=0:
            d =(d+1)%4
            x,y = x+ x_move[d], y+y_move[d]
        else:
            x,y = next_x, next_y

    print(f'#{T+1}')
    for i in arr:
        print(' '.join(map(str, i)))