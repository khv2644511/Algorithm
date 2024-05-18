T = int(input())

# 점수
score = ['A+', 'A0', 'A-', 'B+', 'B0', 'B-', 'C+','C0', 'C-', 'D0']
for tc in range(1, T + 1):
    N, K = map(int, input().split())

    score_list = {}
    for i in range(N):
        중간, 기말, 과제 = map(int, input().split())
        총점 = 중간*0.35 + 기말*0.45 + 과제*0.2
        score_list[i] = 총점

    sorted_lst = sorted(score_list.values(), reverse=True)


    # score_list = [list(map(int, input().split())) for _ in range(N)]
    # print(score_list)
    # print(score_list[K-1]) # 찾는 학생의 점수
    # print(sorted_lst.index(score_list[K-1])) # 찾는 점수가 몇등인지에 대한 인덱스, 인덱스 0 ~ N-1
    searchIdx = sorted_lst.index(score_list[K-1]) # 정렬된 리스트에서 찾으려는 점수의 인덱스를 찾는다

    print(f'#{tc} {score[searchIdx // (N//10)]}')
