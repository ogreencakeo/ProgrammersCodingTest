function solution(num_list) {
    // 오름차순 정렬
    num_list.sort((a,b) => a==b ? 0 : a>b ? 1 : -1);
    var answer = [];
    // i가 0~4까지만 반복하게 함
    for(let i=0; i<5; i++){
        answer.push(num_list[i]);
    }
    return answer;
}