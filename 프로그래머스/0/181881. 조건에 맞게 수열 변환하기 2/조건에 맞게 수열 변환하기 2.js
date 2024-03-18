function solution(arr) {
    let cnt = 0; // 변환 횟수
    
    while(true){
        const newArr = arr.map((v) => {
             if(v>=50 && v%2===0) return v/2;
             if (v<50 && v%2 === 1) return v * 2 + 1;
             return v;
         });
        const isEqual = arr.every((v, i) => v === newArr[i]);
        if(isEqual) break;
        
        cnt++;
        arr = newArr;
    }
     
    return cnt;
}