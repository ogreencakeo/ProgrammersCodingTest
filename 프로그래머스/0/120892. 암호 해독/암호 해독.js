function solution(cipher, code) {
    let sum = '';
    for(let i=1; i<=cipher.length; i++){
        if(i%code===0){
            sum+=cipher[i-1];
        }
    }
    return sum;
}