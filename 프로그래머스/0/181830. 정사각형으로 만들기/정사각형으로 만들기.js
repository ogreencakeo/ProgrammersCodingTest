function solution(arr) {
    let row_len = arr.length;
    let col_len = arr[0].length;
    
    // 열의 수를 부족한 만큼의 0으로 이루어진 배열 gab을 생성
    if(row_len > col_len){
        const gab = Array(row_len - col_len).fill(0);
        return arr.map(v => [...v, ...gab]);
    }
    
    // 행의 수를 부족한 만큼의 0으로 이루어진 배열 gab을 생성
    if(row_len < col_len){
        for(let i=0; i<col_len-row_len; i++){
            const gab = Array(col_len).fill(0);
            arr.push(gab);
        }
    }
    
    return arr;
}