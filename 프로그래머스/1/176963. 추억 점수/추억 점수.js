function solution(name, yearning, photo) {
    let result = [];
    for(let i=0; i<photo.length; i++){
        let totalScore = 0; // 각 그리움 점수
        for(let j=0; j<photo[i].length; j++){
            let person = photo[i][j];
            let idx = name.indexOf(person);
            
            if(idx !== -1) totalScore += yearning[idx];
        }
        result.push(totalScore);
    }
    
    return result;
}