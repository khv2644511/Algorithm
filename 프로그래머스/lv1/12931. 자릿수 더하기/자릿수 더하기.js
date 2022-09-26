function solution(n)
{
    var numLIst = [];
    var answer = 0;
    var sum = 0;
    
    var n = n.toString();
    for (let i=0; i<=n.length-1; i++){
        numLIst.push(n[i]);}
    for (var j in numLIst) {
    sum += parseInt(numLIst[j]);
    }
        
    var answer = sum;
    console.log(answer);
    return answer;
}
