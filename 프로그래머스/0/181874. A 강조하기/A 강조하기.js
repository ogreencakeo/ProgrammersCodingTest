function solution(myString) {
    var answer = myString.split('').map(v => (v === 'a' || v === 'A') ? v.toUpperCase() : v.toLowerCase()).join('');
    return answer;
}