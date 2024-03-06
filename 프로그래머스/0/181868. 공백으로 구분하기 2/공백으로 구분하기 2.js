function solution(my_string) {
    let arr = my_string.replace(/\s+/g + ' ').trim();
    let result = arr.match(/\S+/g);
    return result;
}