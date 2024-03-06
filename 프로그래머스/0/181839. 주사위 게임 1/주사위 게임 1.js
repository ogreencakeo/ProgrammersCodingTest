function solution(a, b) {
    let answer1;
    let answer2;
    let result;
    if(a%2==1 && b%2==1){
        answer1 = Math.pow(a,2);
        answer2 = Math.pow(b,2);
        result = answer1 + answer2;
    }else if(a%2==1 || b%2==1){
        result = 2 * (a + b);
    }else if(!(a%2==1 && b%2==1)){
        result = Math.abs(a - b);
    }
    return result;
}