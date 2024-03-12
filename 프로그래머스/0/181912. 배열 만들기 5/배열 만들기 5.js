function solution(intStrs, k, s, l) {
    let arr = [];
    for(let i=0; i<intStrs.length; i++){
        let subString = intStrs[i].substr(s, l);
        let num = parseInt(subString);
        if(num > k){
            arr.push(num);
        }
    }
    return arr;
}