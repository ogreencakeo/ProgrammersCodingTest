function solution(s) {
    let idx = s.length / 2;
    let arr = s.split('');
    console.log(idx);
    
    return idx === Math.floor(idx) ? arr[idx-1] + arr[idx] : arr[Math.floor(idx)];
}