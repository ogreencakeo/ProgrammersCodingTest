function solution(my_string) {
    let str_arr = my_string.split('');
    let result = [];
    for(let i=0; i<str_arr.length; i++){
        result.push(str_arr.slice(i).join(''));
    }
    return result.sort();
}