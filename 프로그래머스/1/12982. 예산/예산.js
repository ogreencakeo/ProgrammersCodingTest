function solution(d, budget) {
    let cnt = 0;
    let sum = 0;
    d.sort((a, b) => a===b? 0 : a>b ? 1 :  -1);
    
    for(let i of d){
        sum+=i;
        if(sum > budget)break;
        cnt++;
    }
    return cnt;
}