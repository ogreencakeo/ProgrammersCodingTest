function solution(my_string, indices) {
    let str = '';
    for(let i=0; i<my_string.length; i++){
        if(!indices.includes(i)){
            str+= my_string[i];
        }
    }
    return str;
}