function solution(my_string, letter) {
    let answer = my_string.split('').filter((v) => !v.includes(letter)).join('');
    return answer;
}