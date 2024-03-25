function solution(name, yearning, photo) {
    var answer = [];
    let result = [];
    
    let map = new Map();
    
    for (let i=0; i< name.length; i++) {
        map.set(name[i], yearning[i])
    }
    
    for (let arr of photo) {
        let sum = 0;
        // console.log(arr)
        for (let i=0; i< arr.length; i++) {
            if(map.has(arr[i])) {
                let yearn = map.get(arr[i])
                sum += yearn
            }
        }
        result.push(sum)
        console.log(result)
    }
    
    // console.log(map)
    return result;
}