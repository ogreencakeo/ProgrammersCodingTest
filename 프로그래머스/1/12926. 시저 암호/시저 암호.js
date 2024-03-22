function solution(s, n) {
    let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lower = "abcdefghijklmnopqrstuvwxyz";
    let answer = '';
    
    for(let i=0; i<s.length; i++){
        let text = s[i];
        
        if(text === ' '){
            answer += ' ';
            continue;
        }
        
        let textArr = upper.includes(text) ? upper : lower;
        let idx = textArr.indexOf(text) + n;
        
        // 새로운 인덱스가 알파벳 문자열의 길이를 넘어가면 순환시키기 위해, 길이 만큼을 빼줌.
        if(idx >= textArr.length) idx -= textArr.length;
        answer += textArr[idx];
    }
    return answer;
}