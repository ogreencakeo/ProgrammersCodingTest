function solution(my_string, is_suffix) {
    var answer = my_string.slice(-is_suffix.length);
    console.log(answer);
    return answer === is_suffix ? 1 : 0;
}