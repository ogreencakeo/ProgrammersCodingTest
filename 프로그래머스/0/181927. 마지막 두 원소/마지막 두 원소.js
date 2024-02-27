function solution(num_list) {
    let last_ele = num_list[num_list.length-1];
    let last_second_ele = num_list[num_list.length-2];
    num_list.push(last_ele > last_second_ele ? last_ele-last_second_ele : last_ele*2);
    
    return num_list;
                  
}