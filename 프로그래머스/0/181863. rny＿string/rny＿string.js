function solution(rny_string) {
    let arr = rny_string.split('').map((v) => v.includes('m') ? "rn" : v).join('');
    return arr;
}