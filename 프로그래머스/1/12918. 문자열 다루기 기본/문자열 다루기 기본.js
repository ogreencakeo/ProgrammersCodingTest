function solution(s) {
    let arr = s.split('');
    
    if(arr.length !== 4 && arr.length!==6){
        return false;
    }
    
    for(let i of arr){
        if(isNaN(parseInt(i))){
            return false;
        }
    }
    return true;
}