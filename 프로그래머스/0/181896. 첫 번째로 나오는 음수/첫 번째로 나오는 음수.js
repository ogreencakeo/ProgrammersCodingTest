function solution(num_list) {
    for(let i=0; i<num_list.length; i++){
        if(num_list[i] < 0){
            return i;
        }
        
    }
    //음수가 없으므로 -1을 return
    return -1;
}