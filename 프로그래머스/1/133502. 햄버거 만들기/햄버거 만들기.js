function solution(ingredient) {
    var answer = 0;
    let stack = [0];
    let count = 0;
    for (let i=0; i<ingredient.length; i++) {
        stack.push(ingredient[i])
        if(stack.at(-1) ==1 && stack.at(-2) ==3 && stack.at(-3) ==2 && stack.at(-4)==1) {
            stack.pop()
            stack.pop()
            stack.pop()
            stack.pop()
            count ++
        }
    }
    
    return count;
    
}
    

//  // [2, 1, 1, 2, 3, 1, 2, 3, 1]


// 현재 비교하려는 값이 stack에 있는 값보다 +1이라면 스택에 담는다
// 스택의 마지막값이 3이면 1

