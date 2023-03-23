function solution(x, n) {
  console.log(Array(n).fill(x));
  return Array(n)
    .fill(x)
    .map((v, i) => (i + 1) * v);
}