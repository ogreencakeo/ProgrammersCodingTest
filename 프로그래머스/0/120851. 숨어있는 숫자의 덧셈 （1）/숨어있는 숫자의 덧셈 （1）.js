function solution(my_string) {
    let result = my_string.split('').filter((v) => !isNaN(parseInt(v)))
            .map((v) => parseInt(v)).reduce((acc, cur) => acc + cur, 0);
    return result;
}