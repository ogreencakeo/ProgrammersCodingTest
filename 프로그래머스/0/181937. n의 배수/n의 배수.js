function solution(num, n) {
    // num이 n의 배수이면 1, 아니면 0을 리턴하게 함
    return num%n===0? 1 : 0;
}