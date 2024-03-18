function solution(my_str, n) {
    let len = my_str.length;
    console.log(len);
    let arr = [];
    for(let i=0; i<len; i+=n){
        arr.push(my_str.substring(i, i + n));
    }
    return arr;
}