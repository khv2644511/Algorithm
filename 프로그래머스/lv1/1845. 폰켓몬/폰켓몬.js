function solution(nums) {
  //   let select = [];
  const set = new Set(nums);
  const answer = [...set];
  let noDuplicateCount = answer.length;
  let pocketmonCount = nums.length;
  return noDuplicateCount > pocketmonCount / 2
    ? pocketmonCount / 2
    : noDuplicateCount;
  //   for (let i = 0; i < nums.length / 2; i++) {
  //     if (answer[i]) {
  //       select.push(answer[i]);
  //       //   console.log(select);
  //     }
  //   }
  //   //   console.log(select.length);
  //   return select.length;
}