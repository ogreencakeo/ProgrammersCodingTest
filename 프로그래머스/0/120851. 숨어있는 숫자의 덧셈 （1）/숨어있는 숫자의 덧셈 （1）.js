function solution(my_string) {
    let cnt = 0;
    // 매개변수를 배열로 만듦
    let my_string_arr = my_string.split('');
    for(let i of my_string_arr){
        // isNaN() 함수를 사용하여 숫자인지 아닌지를 판별
        if(!isNaN(i)){
            // i가 숫자일 경우 그 값을 더해줌
            cnt+= parseInt(i);
        }
    }
    return cnt;
}