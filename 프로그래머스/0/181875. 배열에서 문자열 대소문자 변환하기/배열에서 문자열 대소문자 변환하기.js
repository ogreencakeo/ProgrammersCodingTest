function solution(strArr) {
    let arr = [];
    for(let i=0; i<strArr.length; i++){
        if(i%2===1){
            // 인덱스 번호가 홀수번째이면 대문자
            arr.push(strArr[i].toUpperCase());
        }else{
            // 인덱스 번호가 짝수번째이면 대문자
            arr.push(strArr[i].toLowerCase());
        }
    }
    return arr;
}