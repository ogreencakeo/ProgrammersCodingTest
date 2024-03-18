function solution(n) {
    // n을 3진법으로 변환
    let base3 = n.toString(3);
    // 3진법을 뒤집음
    let reverseBase3 = base3.split('').reverse().join('');
     // 뒤집힌 3진법을 10진법으로 변환
    let answer = parseInt(reverseBase3, 3);
    return answer;
}