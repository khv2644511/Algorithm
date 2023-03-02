function solution(nums) {
  let select = [];
  const set = new Set(nums);
  const answer = [...set];
  for (let i = 0; i < nums.length / 2; i++) {
    if (answer[i]) {
      select.push(answer[i]);
      //   console.log(select);
    }
  }
  //   console.log(select.length);
  return select.length;
}