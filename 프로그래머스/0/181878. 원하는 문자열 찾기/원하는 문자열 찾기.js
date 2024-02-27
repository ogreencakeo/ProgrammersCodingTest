function solution(myString, pat) {
    let answer = myString.toUpperCase();
    let answer2 = pat.toUpperCase();
    return answer.includes(answer2) ? 1 : 0;
}