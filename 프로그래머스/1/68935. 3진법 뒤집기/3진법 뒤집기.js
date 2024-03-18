function solution(n) {
    let base3 = n.toString(3);
    let reverseBase3 = base3.split('').reverse().join('');
    let answer = parseInt(reverseBase3, 3);
    return answer;
}