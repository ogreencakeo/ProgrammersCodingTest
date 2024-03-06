function solution(num_str) {
    let num_arr = num_str.split('');
    let sum = 0;
    for(let i of num_arr){
        sum+= parseInt(i);
    }
    return sum;
}