function solution(myString, pat) {
    let idx = myString.lastIndexOf(pat);
    console.log(idx);
    return pat.length === 1? myString.slice(0, idx+1) : myString.slice(0, idx+pat.length) ;
}