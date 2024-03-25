function solution(picture, k) {
    let result = [];
    
    // 각 행을 k배 늘림
    for(let row of picture){
        let new_row = '';
        // 행의 문자를 k번 반복
        for(let char of row){
            new_row += char.repeat(k);
        }
        // 행의 수를 k번 반복함
        for(let i=0; i<k; i++){
            result.push(new_row);
        }
    }

    return result;
}
