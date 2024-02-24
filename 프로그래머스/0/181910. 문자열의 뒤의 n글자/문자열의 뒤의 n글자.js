function solution(my_string, n) {
    // 뒤에서부터 n개의 글자를 추출하도록 함
    var answer = my_string.slice(-n);
    return answer;
}