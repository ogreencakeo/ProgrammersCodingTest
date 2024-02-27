function solution(n, control) {
    let arr = control.split('');
    for(let i of arr){
        if(i === 'w'){
            n+=1;
        }else if(i === 's'){
            n-=1;
        }else if(i === 'd'){
            n+=10;
        }else if(i === 'a'){
            n-=10;
        }
    }
    return n;
}