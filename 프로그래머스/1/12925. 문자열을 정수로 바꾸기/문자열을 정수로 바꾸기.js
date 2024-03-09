function solution(s) {
    let arr = s.split('');
    let result = '';
    for(let i of arr){
        if(i==='+' || i==='-'){
            result+= i;      
        }else{
            result+= Number(i);      
        }
    }
    return Number(result);
}