function solution(s) {
    let arr = s.split(' ').map(v => parseInt(v));
    
    let max_num = Math.max(...arr);
    let min_num = Math.min(...arr);

    return `${min_num} ${max_num}`;
}