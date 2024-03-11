function solution(my_string) {
    let arr= my_string.toLowerCase().split('');
    arr.sort((a,b) => a===b? 0 : a>b ? 1 : -1);
    return arr.join('');
}