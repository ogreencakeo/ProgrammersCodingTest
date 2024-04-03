function solution(A, B) {
    let newA = [...A];
    for(let i=0; i<A.length; i++){
        if(A===B) return 0;
        else{
            newA.unshift(newA.pop());
            if(newA.join('') === B) return i+1;
        }
    }
    return -1;
}