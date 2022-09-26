function solution(n) {
    var arr = n.toString().split('');
    console.log(arr)
    var sum = 0;
    arr.forEach(element => {
        sum += parseInt(element);
    });
    return sum;
}
        

