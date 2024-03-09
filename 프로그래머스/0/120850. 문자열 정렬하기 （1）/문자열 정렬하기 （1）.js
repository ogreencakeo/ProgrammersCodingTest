function solution(my_string) {
    return my_string.split('')
        .filter(v => !isNaN(parseInt(v)))
        .map(v => parseInt(v))
        .sort((a, b) => a===b ? 0 : a>b? 1 : -1);
}