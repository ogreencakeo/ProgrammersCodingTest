function solution(n) {
    // 소인수를 저장할 배열
    let result = [];
    let divisor = 2;
    
    while(n > 1){
        if(n%divisor === 0){
            result.push(divisor);
            n /= divisor;
        }else{
            divisor++;
        }   
    }
    return [...new Set(result)];
}