function solution(nums) {
  let select = [];
  //   for (let i = 0; i < nums.length; i++) {
  //     select.push(nums[0]);
  //     for (let j = i + 1; j < nums.length; j++) {
  //       if (nums[i] !== nums[j]) {
  //         // console.log(nums[i], nums[j]);
  //         select.push(nums[j]);
  //       }
  //     }
  //   }
  //   return select;

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
