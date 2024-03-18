function solution(n) {
    // 소인수를 저장할 배열
    let result = [];
    // 1은 소인수에 해당 되지 않으니까 2부터 시작함
    let divisor = 2;
    while(n > 1){
        if(n%divisor === 0){
            result.push(divisor);
            n /= divisor;
        }else{
            divisor++;
        }
    }
    return [... new Set(result)];
}