function solution(x) {
    let sum = 0;
    let arr = x.toString().split('');
    
    for(let i of arr){
        sum+= Number(i);
    }
    
    console.log('sum :', sum);
    
    if(x%sum === 0){
        return true;
    }else{
        return false;
    }
}