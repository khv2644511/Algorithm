const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let testCaseLength = input.shift();
let result = []; // 출력할 값을 저장할 배열

for (let i = 0; i < input.length; i += 2) {
    let N; // 문서 개수
    let targetIdx; // 몇번째로 출력되는지 궁금한 문서 인덱스
    let priority; // 문서들의 중요도가 담긴 배열
    let 출력; // 출력된 문서
    let count = 0; // 출력된 횟수

    [N, targetIdx] = input[i].split(' ');
    priority = input[i + 1].split(' ');

    let 문서 = Array.from({ length: N }, (v, i) => i); // 문서를 문서 개수만큼 생성하고, 인덱스를 넣어준다. N=4라면, [0, 1, 2, 3]

    let max = Math.max.apply(null, priority); // 문서들의 중요도가 담긴 배열의 최댓값을 담는 변수
    // console.log('max', typeof max);

    let whileBool = true; // 조건문 탈출을 위해 설정한 변수
    while (whileBool) {
        max = Math.max.apply(null, priority); // 중요도가 담긴 배열이 변경될 때 마다 최댓값이 변경되므로 재설정해주기

        // max 값이 맨 앞이면 중요도 배열과 문서 배열의 첫번째 값을 빼고 맨 뒤로 보내고, 출력 횟수를 1증가
        if (max === parseInt(priority[0])) {
            priority.shift();
            출력 = 문서.shift();
            count++;
        } else {
            // 맨 앞에 값이 최대가 아니면 뒤에 더 우선순위가 높은 문서가 있으므로 priority, 문서 배열의 첫번째 값을 맨 뒤로 보내기
            priority.push(priority.shift());
            문서.push(문서.shift());
        }

        // 몇번째로 출력되는지 궁금한 문서 인덱스 값이 출력하려는 문서라면 출력 횟수를 프린트
        if (parseInt(targetIdx) === 출력) {
            whileBool = false;
            result.push(count);
            // console.log('몇번째로?', count);
        }
    }
}

console.log(result.join('\n'));
