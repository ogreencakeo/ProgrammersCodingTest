function solution(my_string, letter) {
    var answer = my_string.split('').filter((v) => v !== letter).join('');
    
    return answer;
}