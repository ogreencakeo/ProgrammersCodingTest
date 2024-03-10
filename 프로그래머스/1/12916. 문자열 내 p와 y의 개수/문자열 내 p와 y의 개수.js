function solution(s){
    let arr = s.toLowerCase().split('');
    let pLen = 0;
    let yLen = 0;
    for(let i of arr){
        if(i === 'p'){
            pLen++;
        }else if(i === 'y'){
            yLen++;
        }
    }
    return pLen === yLen;
}