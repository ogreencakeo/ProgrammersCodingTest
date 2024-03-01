function solution(start, end_num) {
    var answer = [];
    for(let i=end_num; i<=start; i++){
        answer.push(i);
    }
    return answer.reverse();
}