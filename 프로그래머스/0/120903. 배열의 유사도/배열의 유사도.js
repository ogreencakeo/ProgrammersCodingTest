function solution(s1, s2) {
    var cnt = 0;
    s1.filter((v) => {
        for(let i=0; i<s2.length; i++){
            if(s2[i] === v){
                cnt++;
            }
        }
    });
    return cnt;
}