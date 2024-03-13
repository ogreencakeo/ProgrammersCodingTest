function solution(num_list) {
    let cnt = 0;
    for(let i of num_list){
        while(i !== 1){
            if(i%2===0){
                i/=2;
                cnt++;
            }else{
                i = (i-1)/2;
                cnt++;
            }
        }
    }
    return cnt;
}