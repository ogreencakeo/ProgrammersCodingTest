function solution(n) {
    let odd_sum = 0;
    let even_sum = 0;
    for(let i=1; i<=n; i++){
        // n과 i가 홀수 일 경우
        // 홀수인 i만 더하게 한다.
        if(n%2===1 && i%2===1){
            odd_sum+=i;
        }
        // n과 i가 짝수 일 경우
        // 짝수인 i만 더하게 한다.
        else if(n%2===0 && i%2===0){
            even_sum+=Math.pow(i, 2);
        }
    }
    return n%2===1? odd_sum : even_sum;
}