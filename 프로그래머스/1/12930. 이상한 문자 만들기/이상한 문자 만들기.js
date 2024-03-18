function solution(s) {
    
    let arr = s.split(' ');
    console.log(arr);
    let result = [];
    
    for(let i of arr){
        for(let j=0; j<i.length; j++){
            j%2 === 0? result.push(i[j].toUpperCase()) : result.push(i[j].toLowerCase());
        }
        result.push(' ');
    }
    
    // 마지막 공백 제거
    result.pop(' ')
    
    return result.join('');
}