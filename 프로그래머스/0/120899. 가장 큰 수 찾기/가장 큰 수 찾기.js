function solution(array) {
    let maxNum = Math.max(...array);
    let maxIdx = array.indexOf(maxNum);
    return [maxNum, maxIdx];
}