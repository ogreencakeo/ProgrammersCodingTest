function solution(number) {
    let sum= 0 ;
    let arr = number.split('');
    for(let i of arr){
        sum += Number(i);
    }
    return sum%9;
}