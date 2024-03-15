function solution(myStr) {
    let str = [];
    let temp = '';
    
    for(let i of myStr){
        if(i === 'a' || i === 'b' || i=== 'c'){
            if(temp.length > 0){
                str.push(temp);
                temp = '';
            }
        }else{
            temp += i;
        }
        
    }
    
    if(temp.length > 0){
        str.push(temp);
    }
    
    if(str.length === 0){
        return ['EMPTY'];
    }else{
        return str;
    }
}