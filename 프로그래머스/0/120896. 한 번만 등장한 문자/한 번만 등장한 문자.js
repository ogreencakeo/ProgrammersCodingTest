function solution(s) {
    let cnt = {};
    for(let i of s){
        cnt[i] = (cnt[i] || 0) + 1;
    }
    
    let result = '';
    
    for(let i in cnt){
        if(cnt[i] === 1){
            result += i;
        }
    }
    result = result.split('').sort().join('');
    return result;
}