function solution(A,B){
    // 오름차순
    A.sort((a, b) => a - b);
    B.sort((a, b) => a - b);
    
    let sum = 0;
    
    for(let i=0; i<A.length; i++){
        sum += A[i] * B[B.length - 1 - i];
    }
    return sum;
}