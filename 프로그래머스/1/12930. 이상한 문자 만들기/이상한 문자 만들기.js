function solution(s) {
    let answer = s.split(' ');
    let result = [];
    //return answer;
    for(let i of answer){
        for(let j=0; j<i.length; j++){
            j%2 === 0?  result.push(i[j].toUpperCase()) : result.push(i[j].toLowerCase());
        }
        result.push(' ');
    }
    // 마지막 공백 제거
    result.pop(' ');
    
    return result.join('');
}