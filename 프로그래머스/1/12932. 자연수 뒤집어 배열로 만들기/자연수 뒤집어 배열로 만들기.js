function solution(n) {
    let result = [];
    let arr = n.toString().split('');
    for(let i of arr){
        result.unshift(Number(i));
    }
    return result;
}