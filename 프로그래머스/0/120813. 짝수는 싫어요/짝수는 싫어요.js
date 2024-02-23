function solution(n) {
    var answer = [];
    for(let i=1; i<=n; i++){
        if(i%2 === 1){
            answer.push(i);
        }
    }
    return answer.sort((a,b) => a===b ? 0 : a>b? 1:-1);
}