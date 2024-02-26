function solution(n, numlist) {
    let answer = [];
    for(let i of numlist){
        // i의 값이 n의 배수일때 빈 배열 answer에다가
        // i의 값을 push 해줌.
        if(i % n===0){
            answer.push(i);
        }
    }
    return answer;
}