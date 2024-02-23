function solution(array) {
    array.sort((a,b) => a===b ? 0 : a>b? -1 : 1);
    var middle_len = Math.floor((array.length) / 2);
    return array[middle_len];
    
}