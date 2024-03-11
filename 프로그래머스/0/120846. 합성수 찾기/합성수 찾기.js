function solution(n) {
    let arr = [];
    
    for(let i=1; i<=n; i++){
        for(let j=2; j<i; j++){
           if(i % j===0){
               arr.push(i);
           }
        }
    }
    
    // 중복값을 제서하기 위해 set()을 사용함.
    return [...new Set(arr)].length;
}