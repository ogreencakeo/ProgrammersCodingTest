function solution(n) {
    let cnt = 0;
    for(let i=1; i<=n; i++){
        cnt++;
        // 만약 숫자가 3의 배수가 아닌 경우, 이제는 문자열로 변환하여 해당 문자열이 '3'을 포함하는지 확인
        // ex : 23
        while(cnt % 3 === 0 || cnt.toString().includes('3')){
            cnt++;
        }
    }
    return cnt;
}