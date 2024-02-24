function solution(start_num, end_num) {
    var answer = [];
    // for문 시작점을 start_num으로 해주고 끝나는 점을 end_num으로 해줌
    for(let i=start_num; i<=end_num; i++){
        // 빈배열에다가 i를 push 해줌
        answer.push(i);
    }
    return answer;
}