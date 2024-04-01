function solution(myString, pat) {
    let idx = myString.lastIndexOf(pat);
    console.log(idx);
    return myString.slice(0, idx + pat.length) ;
}