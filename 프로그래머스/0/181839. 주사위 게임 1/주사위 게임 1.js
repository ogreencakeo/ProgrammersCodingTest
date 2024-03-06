function solution(a, b) {
    let result;
    if(a%2==1 && b%2==1){
        result = Math.pow(a,2) + Math.pow(b,2);
    }else if(a%2==1 || b%2==1){
        result = 2 * (a + b);
    }else if(!(a%2==1 && b%2==1)){
        result = Math.abs(a - b);
    }
    return result;
}