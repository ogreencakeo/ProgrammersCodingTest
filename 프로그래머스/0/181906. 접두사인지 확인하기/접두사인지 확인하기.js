function solution(my_string, is_prefix) {
    var answer = my_string.slice(0, is_prefix.length);
    console.log(answer);
    return is_prefix===answer ? 1 : 0;
}