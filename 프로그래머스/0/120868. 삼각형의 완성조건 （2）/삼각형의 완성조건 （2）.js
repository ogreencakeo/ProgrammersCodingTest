function solution(sides) {
    let cnt = 0;
    let maxNum = Math.max(...sides);
    let minNum = Math.min(...sides);
    
    // 만약 기존 요소 중 가장 긴 변이 있다면
    for(let i=maxNum-minNum+1; i<=maxNum; i++){
        cnt++;
    }
    
      // 나머지 한 변이 가장 긴 변인 경우
    for(let i=maxNum+1; i<maxNum+minNum; i++){
        cnt++;
    }
    return cnt;
}