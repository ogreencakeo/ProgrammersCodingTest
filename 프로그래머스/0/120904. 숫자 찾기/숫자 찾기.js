function solution(num, k) {
    let arr =  num.toString().split('');
    for(let i=0; i<arr.length; i++){
        if(Number(arr[i])===k){
            return i+1;
        }
    }
    return -1;
}