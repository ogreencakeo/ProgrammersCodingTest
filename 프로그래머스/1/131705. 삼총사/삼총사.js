function solution(number) {
    let cnt = 0;
    
    // 백트래킹을 수행하는 재귀 함수
    function backtrack(idx, sum, select){
         // 선택된 숫자가 3개이고, 그 합이 0이면 cnt를 증가
        if(sum === 0 && select === 3){
            cnt++;
            return;
        }
        // 현재 인덱스가 배열의 길이를 벗어나면 종료
        if(idx === number.length){
            return;
        }
        
        // 현재 숫자를 선택하지 않는 경우
        backtrack(idx+1, sum, select);
         // 현재 숫자를 선택하는 경우
        backtrack(idx + 1, sum + number[idx], select+1);
        
    }
    
    // 백트래킹 함수를 호출
    backtrack(0, 0, 0);
    return cnt;
}