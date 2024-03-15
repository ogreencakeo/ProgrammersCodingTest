function solution(s) {
    let lowerStr =  s.split('').filter((v) => v!== v.toUpperCase()).sort((a, b) => a === b? 0 : a>b ? -1 : 1).join('');
    let upperStr = s.split('').filter((v) => v == v.toUpperCase()).sort((a, b) => a === b? 0 : a>b ? -1 : 1).join('');
    
    return lowerStr + upperStr;
}