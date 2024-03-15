function solution(price, money, count) {
    let result = 0;
    for(let i= 1; i<=count; i++){
       result += i * price ;
    }
    
    return money > result ? 0 : result - money;

}