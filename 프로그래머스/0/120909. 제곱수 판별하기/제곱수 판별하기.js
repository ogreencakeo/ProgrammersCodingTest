function solution(n) {
    // Math.sqrt()는 제곱근을 계산해준다.
    var answer = Math.sqrt(n);
    //  제곱수인 경우, 제곱근은 정수가 되므로 answer과
    // Math.floor(answer)은 동일한 값
    if(answer === Math.floor(answer)){
        return 1;
    }else{
        return 2;
    }
}