function solution(arr, k) {
    let answer = [];
    for(let i of arr){
        if(k % 2===1){
            // 빈배열 answer을 push 해줌
            // 배열 arr의 i의 값에 k만큼 곱해준다.
            answer.push(i * k);
        }else{
            // 빈배열 answer을 push 해줌
            // 배열 arr의 i의 값에 k만큼 더해준다.
            answer.push(i + k);
        }
        
        
    }
    return answer;
}