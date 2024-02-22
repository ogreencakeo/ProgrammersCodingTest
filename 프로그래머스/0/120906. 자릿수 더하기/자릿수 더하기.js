function solution(n) {
    var arr = n.toString().split('');
    var sum = 0;
    
    for(let i of arr){
        sum+=parseInt(i);
    }
    return sum;
}