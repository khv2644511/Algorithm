function solution(clothes) {
  const mapClothes = new Map();
  let cnt = 1;
  for (let [c, t] of clothes) {
    if (mapClothes.has(t)) {
      mapClothes.set(t, mapClothes.get(t) + 1);
    } else {
      mapClothes.set(t, 1);
    }
    console.log(mapClothes);
  }

  for (let x of mapClothes.values()) {
    console.log("x=", x);
    cnt *= x + 1;
  }
  return cnt - 1;
}