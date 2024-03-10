function solution(myString) {
    return myString.split('x').filter(v => isNaN(v) || v!== '').sort();
}