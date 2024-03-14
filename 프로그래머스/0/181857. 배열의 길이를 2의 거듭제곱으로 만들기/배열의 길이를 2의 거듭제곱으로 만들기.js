function solution(arr) {
    let len = arr.length;
    let tglen = 1;
    
    while(len > tglen){
        tglen *= 2;
    }
    
    if(tglen === len){
        return arr;
    }
    
    // 0을 추가한 배열
    let result = [...arr];
    while(result.length < tglen){
        result.push(0);
    }
    
    return result;
}