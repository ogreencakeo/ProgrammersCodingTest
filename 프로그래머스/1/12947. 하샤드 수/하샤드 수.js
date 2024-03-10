function solution(x) {
    let sum = 0;
    let arr = x.toString().split('');
    
    for(let i of arr){
        sum+= Number(i);
    }
    
    return x%sum===0? true : false;

}