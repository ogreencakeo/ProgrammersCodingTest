function solution(i, j, k) {
    let result = '';
    for(let e=i; e<=j; e++){
        if(e.toString().includes(k)){
            result += e;
        }
    }
    return result.split(k).length - 1;
}