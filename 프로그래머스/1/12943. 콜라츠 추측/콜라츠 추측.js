function solution(num) {
    let sum = 0;
    while(num !== 1 && sum!==500){
        num%2===0 ? num/=2 : num = num*3+1;
        sum++;
    }
    return num == 1?  sum : -1;
}