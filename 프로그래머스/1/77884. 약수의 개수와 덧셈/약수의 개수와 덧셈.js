function solution(left, right) {
    let result = 0;
    for(let i=left; i<=right; i++){
        let cnt = 0;
        for(let j=1; j<=i; j++){
            if(i % j === 0){
                cnt++;
            }
        }
        // 홀 짝
        if(cnt % 2 === 0){
            result += i;
        }else{
            result -= i;
        }
        
    }
    
    return result;
  
}