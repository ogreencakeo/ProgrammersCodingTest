function solution(arr, divisor) {
    let result = arr.filter((v) => v % divisor===0);
    if(result.length === 0){
        return [-1];
    }
    return result.sort((a, b) => a===b? 0 : a>b? 1 : -1);
}