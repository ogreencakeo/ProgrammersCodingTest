function solution(number, n, m) {
    // 매개변수 number이 n과, m으로 나눴을때 나머지가 0이면
    // 최소 공배수에 해당하므로 1을 리턴해주고 아니면 0을 리턴하게 함
    var answer = number%n==0 && number%m===0 ? 1 : 0;
    return answer;
}