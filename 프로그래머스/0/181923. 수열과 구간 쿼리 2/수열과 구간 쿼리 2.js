function solution(arr, queries) {
    let result = [];
    
    for(let query of queries){
        let [start, end, num] = query;
        // 가장 작은 값 초기화 
        let min = Infinity;
        
        for(let i=start; i<=end; i++){
            if(arr[i] > num && arr[i] < min){
                min = arr[i];
            }
        }
        
        if(min === Infinity){
            result.push(-1);
        }else{
            result.push(min);
        }
    }
    return result;
}