function solution(n) {
    for(let i=1; i<=n; i++){
        if(n === Math.pow(i, 2)){
            return Math.pow(i+1, 2);
        }
        
    }
    return -1;
}