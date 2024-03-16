function solution(array) {
    let result =  array.join('').split('7');
    return result.length === 1 ? 0 : result.length - 1;
}