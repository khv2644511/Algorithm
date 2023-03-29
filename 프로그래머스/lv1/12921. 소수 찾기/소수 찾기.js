function solution(n) {
    var arr =[];
    for(var i=0; i<=n; i++){
        arr.push(true);
    }
    
    arr[0] = false;
    arr[1] = false;
    
    for(var i=2; i<=n; i++){
        if (arr[i]) {
            for(var k=2; k<=n/i; k++){
                arr[i*k] = false;
            }
        }
    }
    
    return arr.filter(bool => bool === true).length;
}