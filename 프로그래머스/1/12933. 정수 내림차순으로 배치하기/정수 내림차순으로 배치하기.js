function solution(n) {
    let arr = n.toString().split('');
    return Number(arr.sort((a, b) => a===b ? 0 : a>b? -1 : 1).join(''));
}