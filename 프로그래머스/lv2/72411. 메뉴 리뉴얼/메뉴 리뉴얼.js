function solution(orders, course) {
  var answer = [];
  let obj = {};

  // orders의 각 원소를 오름차순으로 정렬
  orders = orders.map((order) => order.split("").sort().join(""));

  for (let k of course) {
    for (let order of orders) {
      // 현재 원소에서 k개의 문자를 뽑아 조합 만들기
      let combination = combinationUtil(order, k);
      for (let comb of combination) {
        // 오름차순으로 정렬하여 중복 방지
        comb = comb.split("").sort().join("");
        if (obj[comb]) {
          obj[comb]++;
        } else {
          obj[comb] = 1;
        }
      }
    }
    // obj 객체를 순회하며 value가 2 이상이고 가장 큰 value 값을 갖는 조합들을 answer 배열에 추가
    let maxCount = Math.max(...Object.values(obj));
    if (maxCount >= 2) {
      for (let [key, value] of Object.entries(obj)) {
        if (value === maxCount && key.length === k) {
          answer.push(key);
        }
      }
    }
    // obj 초기화
    obj = {};
  }

  return answer.sort();
}

// n개의 원소 중 k개를 뽑는 조합 구하기
function combinationUtil(arr, k) {
  let result = [];
  let combination = [];
  combinationUtilHelper(arr, k, 0, combination, result);
  return result;
}

function combinationUtilHelper(arr, k, index, combination, result) {
  if (combination.length === k) {
    result.push(combination.join(""));
    return;
  }
  for (let i = index; i < arr.length; i++) {
    combination.push(arr[i]);
    combinationUtilHelper(arr, k, i + 1, combination, result);
    combination.pop();
  }
}