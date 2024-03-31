function solution(my_string) {
    let answer = my_string.split(/a|e|i|o|u/).filter((v) => v).join('');
    return answer;
}