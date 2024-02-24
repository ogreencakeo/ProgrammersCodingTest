function solution(n) {
    var answer = Math.sqrt(n);
    if(answer === Math.floor(answer)){
        return 1;
    }else{
        return 2;
    }
}