function solution(num_list) {
    let odd_sum = 0;
    let even_sum = 0;
    for(let i=0; i<num_list.length; i++){
        if((i+1) % 2 === 1){
            odd_sum += num_list[i];
        }else{
            even_sum += num_list[i];
        }
    }
    let result = odd_sum > even_sum? odd_sum : even_sum;
    return result;
}