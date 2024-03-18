function solution(t, p) {
    let cnt = 0;
    let pNum = parseInt(p);
   
    for(let i=0; i<t.length - p.length + 1; i++){
        const subString = t.substring(i, i+p.length);
        const subNum = parseInt(subString);
        if(subNum <= pNum){
            cnt++;
        }
    }
    return cnt;
}