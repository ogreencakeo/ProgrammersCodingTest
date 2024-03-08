function solution(my_string) {
    let str_arr = my_string.split('');
    let arr = [];
    for(let i of str_arr){
        let num = parseInt(i);
        if(!isNaN(num)){
            arr.push(num);
        }
    }
    return arr.sort((a,b) => a===b? 0 : a>b ? 1 : -1);
}