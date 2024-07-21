function solution(s) {
    var answer = [];
    
    let hashMap = new Map();

    let arr = [...s]

    arr.map((el, idx) => {
        if (!hashMap.has(el)) {
            answer.push(-1)
            hashMap.set(el, idx)
        } else {
            let diff = idx - hashMap.get(el)
            console.log('diff',diff)
            answer.push(diff)
            hashMap.set(el, idx)
        }
    })
    // console.log(el,idx)
    // for (let [key, value] of hashMap) {
    //     console.log(key,value)
    // }
    return answer;
}