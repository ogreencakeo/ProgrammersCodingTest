function solution(my_string) {
    let arr = my_string.match(/\d+/g);
    if(arr === null) return 0;
    return arr.reduce((acc, cur) => acc + parseInt(cur), 0);
}