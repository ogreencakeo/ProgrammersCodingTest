function solution(arr) {
    if(arr.length === 1){
        return [-1];
    }
    
    const minIndex = arr.indexOf(Math.min(...arr)); // 가장 작은 수의 인덱스를 찾습니다.
    arr.splice(minIndex, 1);
    
    return arr;
}