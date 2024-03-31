function solution(my_string, n) {
    let result = my_string.split('').map((v) => v.repeat(n)).join('');
    return result;
}