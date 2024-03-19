function solution(numbers, k) {
    // k - 1로 시작하여 배열의 인덱스가 0부터 시작
    // * 2를 통해 오른쪽으로 두 명 
    // % numbers.length를 통해 배열의 길이를 벗어나는 경우를 처리
    return numbers[(k - 1) * 2 % numbers.length];
}