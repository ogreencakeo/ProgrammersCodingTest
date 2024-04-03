function solution(my_string, is_suffix) {
    
    let arr = [];
    for(let i=0; i<my_string.length; i++){
        arr.push(my_string.slice(i));
    }
    let result = arr.indexOf(is_suffix);
    
    return result === -1 ? 0 : 1;

}