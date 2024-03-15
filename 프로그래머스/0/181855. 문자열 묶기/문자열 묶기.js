function solution(strArr) {
    let group = {};
    let maxCnt = 0;
    
    for(let i of strArr){
        let len = i.length;
        if(!group[len]){
            group[len] = [];
        }
        group[len].push(i);
    }
    
    for(let i in group){
        let cnt = group[i].length;
        maxCnt = Math.max(maxCnt, cnt);
    }
    return maxCnt;
}