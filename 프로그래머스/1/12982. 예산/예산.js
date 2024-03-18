function solution(d, budget) {
    let sum = 0;
    let cnt = 0;
    d.sort((a, b) => a===b ? 0 : a>b ? 1 : -1);
    
    for(let i of d){
        sum+= i;
        if(budget < sum){
            break;
        }
        cnt++;
    }
    return cnt;
}