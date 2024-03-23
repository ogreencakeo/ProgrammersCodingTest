function solution(s) {
    let num_str = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let result = '';
    let temp = '';
    
    for(let i=0; i<s.length; i++){
        if(!isNaN(s[i])){
            result += s[i];
        }else{
            temp += s[i];
            if(num_str.includes(temp)){
                result += num_str.indexOf(temp);
                temp = '';
            }
        }
    }
    return parseInt(result);
}