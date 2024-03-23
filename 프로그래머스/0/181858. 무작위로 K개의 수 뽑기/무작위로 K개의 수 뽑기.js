function solution(arr, k) {
    let set = new Set(); // 중복 처리
    let new_arr = [];
    
    for(let i of arr){
        if(!set.has(i)){
            new_arr.push(i);
            set.add(i);
        }
        
        if(new_arr.length === k){
            break;
        }
    }
    
    
    // k보다 작을 때까지 -1 추가
    while(new_arr.length < k){
            new_arr.push(-1);
    }
    
    return new_arr;
}