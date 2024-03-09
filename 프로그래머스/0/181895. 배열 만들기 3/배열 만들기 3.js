function solution(arr, intervals) {
    let result = [];
    for(let i of intervals){
        for(let j=i[0]; j<=i[1]; j++){
            result.push(arr[j]);
        }
    }

    return result;
}