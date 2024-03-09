function solution(n)
{
    var sum = 0;

    let arr = n.toString().split('');
    for(let i of arr){
        sum+= Number(i);
    }
    
    return sum;
}