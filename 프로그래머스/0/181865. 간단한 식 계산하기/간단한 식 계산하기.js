function solution(binomial) {
    let binomial_arr = binomial.split(' ');
    let num_arr = [];
    let opp_arr = [];
    let result;
    for(let i of binomial_arr){
        let num = parseInt(i);
        if(!isNaN(num)){
            num_arr.push(num);
        }else{
            opp_arr.push(i);
        }
    }
    
    for(let i of opp_arr){
        if(i==='+'){
            result = num_arr[0] + num_arr[1]
        }else if(i==='-'){
            result = num_arr[0] - num_arr[1]
        }else if(i==='*'){
            result = num_arr[0] * num_arr[1]
        }
    }

    return result;
}