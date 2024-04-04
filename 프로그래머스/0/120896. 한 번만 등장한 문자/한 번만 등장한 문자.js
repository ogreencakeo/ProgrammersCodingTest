function solution(s) {
    let result = {};
    const arr = [];
    for(let i of s){
        if(result[i] === undefined){
            result[i] = 1;
        }else{
            result[i]++;
        }
    }
    for (let key in result) {
        if (result[key] === 1) {
            arr.push(key);
        }
    }
    arr.sort();
    return arr.join('');
}