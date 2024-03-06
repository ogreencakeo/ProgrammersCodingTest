function solution(num_list, n) {
    let afterN = num_list.slice(n);
    let beforeN = num_list.slice(0, n);
    let result = afterN.concat(beforeN);
    
    return result;
}