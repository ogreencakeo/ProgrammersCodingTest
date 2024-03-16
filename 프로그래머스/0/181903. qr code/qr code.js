function solution(q, r, code) {
    let arr = code.split('');
    let str = '';
    for(let i=r; i<arr.length; i+=q){
        str += arr[i];
    }
    return str;
}