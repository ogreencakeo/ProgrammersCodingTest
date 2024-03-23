function solution(array, commands) {
    let result = [];
    
   for(let query of commands){
       let [start, end, num] = query;
       let new_arr = array.slice(start-1, end);
       new_arr.sort((a, b) => a>b ? 1 : -1);
       result.push(new_arr[num-1]) // // k번째 숫자 저장
   }
    
    return result;

}