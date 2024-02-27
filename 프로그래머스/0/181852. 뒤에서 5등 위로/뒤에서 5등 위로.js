function solution(num_list) {
    num_list.sort((a, b) => a===b ? 0 : a>b ? 1 : -1);
    var answer = [];
    for(let i=5; i<num_list.length; i++){
        answer.push(num_list[i]);
    }
    
    return answer;
}