function solution(q, r, code) {
    let arr = code.split('');
    let str = '';
    for(let i=r; i<arr.length; i+=q){
        // if(i % q === 0){
            // console.log(i)
            str += arr[i];
        // }
    }
    return str;
}