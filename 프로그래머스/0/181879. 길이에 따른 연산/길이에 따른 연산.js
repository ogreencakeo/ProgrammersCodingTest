function solution(num_list) {
    let sum = 0;
    let multiple = 1;
    for(let i of num_list){
        if(num_list.length > 10){
            sum+= i;
        }else{
            multiple*=i;
        }
    }
    return num_list.length > 10? sum : multiple;
}