function solution(my_string, s, e) {
    let arr = my_string.split('').slice(s, e+1).reverse().join('');
    let answer = my_string.substring(0, s) + arr + my_string.substring(e+1);
    return answer;
}