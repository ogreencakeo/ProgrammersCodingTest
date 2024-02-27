function solution(numbers, n) {
    let sum = 0;
    for(let i of numbers){
        sum+=i;
        // 합계가 n 보다 클 경우 break해줌
        if(sum > n){
            break;
        }
    }
    return sum;
}