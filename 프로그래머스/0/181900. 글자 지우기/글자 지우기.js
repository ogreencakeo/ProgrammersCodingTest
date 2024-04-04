function solution(my_string, indices) {
    let result = my_string.split('').filter((v, i) => !indices.includes(i)).join('');
    return result;
}