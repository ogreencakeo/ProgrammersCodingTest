function solution(arr) {
    let result = [];
    for(let i=0; i<arr.length; i++){
        if(result.length === 0){
            result.push(arr[i]);
        }else if(arr[i] === result[result.length - 1]){
            result.pop();
        }else if(arr[i] !== result[result.length - 1]){
            result.push(arr[i]);
        }
    }
    return result.length === 0 ? [-1] : result;
}