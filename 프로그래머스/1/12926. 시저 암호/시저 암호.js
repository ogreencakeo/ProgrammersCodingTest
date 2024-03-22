function solution(s, n) {
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lower = "abcdefghijklmnopqrstuvwxyz";
    var answer= '';

    for(var i =0; i <s.length; i++){
        var text = s[i];
        if(text == ' ') {
            answer += ' '; 
            continue;
        }
        var textArr = upper.includes(text) ? upper : lower;
        var index = textArr.indexOf(text)+n;
        // 새로운 인덱스가 알파벳 문자열의 길이를 넘어가면 순환시키기 위해, 길이 만큼을 빼줌.
        if(index >= textArr.length) index -= textArr.length;
        answer += textArr[index];
    }
    return answer;
}