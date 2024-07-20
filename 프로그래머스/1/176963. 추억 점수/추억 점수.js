function solution(name, yearning, photo) {
    var answer = [];
    
    let hashMap = new Map();
    
    for (let i = 0; i < name.length; i++) {
        for (let j = 0; j < yearning.length; j++) {
              if(i===j) {
                hashMap.set(name[i], yearning[j])
              }
        }
    }
    
    // for (let [key, value] of hashMap) {
    //     console.log(key + ' = ' + value)
    // }    
    photo.map((arr) => {
        let count = 0

        for (let i = 0; i < arr.length; i++) {
            if (hashMap.has(arr[i])) {
                count += hashMap.get(arr[i])
            }
        }
        answer.push(count)
        // console.log(count)
    })
    return answer;
}
