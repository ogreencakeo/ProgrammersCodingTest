function solution(s) {
    let arr = s.split(' ');
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        arr[i] === 'Z' ? sum-= parseInt(arr[i-1]) : sum+= parseInt(arr[i]);
    }
    return sum;
}