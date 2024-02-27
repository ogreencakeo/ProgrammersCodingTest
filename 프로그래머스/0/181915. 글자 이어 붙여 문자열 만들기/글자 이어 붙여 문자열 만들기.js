function solution(my_string, index_list) {
    let sum ='';
    let str = my_string.split('');
    for(let i of index_list){
        sum+= str[i];
    }
    return sum
    
}