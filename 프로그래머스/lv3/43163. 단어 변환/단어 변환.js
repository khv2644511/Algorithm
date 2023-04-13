function solution(begin, target, words) {
  var answer = 0;
  let visited = [];
  let queue = [];
  if (!words.includes(target)) {
    return 0;
  }
  queue.push([begin, answer]); //일단 queue에 [시작단어, 변경횟수]를 배열형태로 넣는다.

  while (queue) {
    console.log(queue);
    let [v, cnt] = queue.shift(); //queue의 맨 왼쪽 값을 꺼낸다.
    console.log(queue);

    if (v === target) {
      //꺼낸값의 v가 맞으면 cnt는 횟수 이므로 cnt를 return한다.
      return cnt;
    }

    words.forEach((word) => {
      let notEqual = 0; //다른갯수를 구하기위해 변수를 선언한다.

      if (visited.includes(word)) return; //방문했던 단어면 pass
      console.log(word);
      for (let i = 0; i < word.length; i++) {
        if (word[i] !== v[i]) notEqual++; //word를 반복하면서 다른 알파벳의 갯수를 체크한다
      }

      if (notEqual === 1) {
        //만약 다른게 1개라면
        queue.push([word, ++cnt]); //queue에 [단어, 횟수] 형태로 넣는다.
        //처음으로 따지면 hit -> hot이 되었을 때가 1이 된다.
        visited.push(word); //방문처리를 해준다.
      }
    });
  }
  return answer;
}

let words = ["hot", "dot", "dog", "lot", "log", "cog"];
let begin = "hit";
let target = "cog";
console.log(solution(begin, target, words));
