function solution(arr) {
    if(arr.length <= 1){
        return [-1];
    }
    
    let result = arr.indexOf(Math.min(...arr));
    arr.splice(result, 1);
    
    return arr;
}