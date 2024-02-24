function solution(a, b, flag) {
    // flag가 true일 경우 a+b를 해주고
    // false일 경우, a-b를 해줌.
    var answer = flag? a+b : a-b;
    return answer;
}