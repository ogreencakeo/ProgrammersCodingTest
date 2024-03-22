function solution(balls, share) {
    
    function combination(n, m){
        let combiResult = 1;
        let facResult = 1;
        
        // 분자 계산
        for(let i=n; i > n-m; i--){
            combiResult *= i;
        }
        
        // 분모 계산
        for(let i=m; i>0; i--){
            facResult *= i;
        }
        
        return combiResult / facResult;
    }
    return combination(balls, share);
}