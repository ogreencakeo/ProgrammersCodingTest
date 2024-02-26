function solution(a, b) {
    // 숫자 형태를 문자열을 붙어쓴 형태로 나타나기 위해서
    // 먼저 문자열로 변환 toString()을 사용하고
    // 다시 숫자로 변환하게 parseInt를 사용하였다.
    var answer1 = parseInt(a.toString()+b.toString());
    var answer2 = 2 * a * b
    return answer1>answer2? answer1 : answer2;
}