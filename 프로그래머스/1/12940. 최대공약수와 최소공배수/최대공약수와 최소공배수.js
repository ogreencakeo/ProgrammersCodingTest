function solution(n, m) {
    
    // 유클리드 호제법
    function gcd(a, b){
        return b === 0 ? a : gcd(b, a%b);
    }
    
    let gdcResult = gcd(n, m); // 최대 공약수
    let lcmResult = (n * m) / gdcResult; // 최소 공배수
    
    return [gdcResult, lcmResult ];
}