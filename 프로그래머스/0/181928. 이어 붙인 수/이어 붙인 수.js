function solution(num_list) {
    // answer[0] = 짝수의 합
    // answer[0] = 홀수의 합
    let answer = [0, 0];
    let oddNum = 0;
    let evenNum = 0;
    for(let i of num_list){
        if(i%2===1){
            oddNum+=i.toString();
        }else{
            evenNum+=i.toString();
        }
    }
    answer[0] = oddNum;
    answer[1] = evenNum;
    return parseInt(answer[0])+parseInt(answer[1]);
}