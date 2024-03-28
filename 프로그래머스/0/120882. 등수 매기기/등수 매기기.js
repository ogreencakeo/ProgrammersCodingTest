function solution(score) {
    let scoreArr = [];
    for(let i of score){
        const [en, math] = i
        scoreArr.push(( en + math )/2);
    }
    
    // 평균을 점수순으로 내림차순 정렬
    let sortArr = [...scoreArr].sort((a, b) => b - a);
    
    let rank = [];
    
    // 등수 계산
    for(let i of scoreArr){
        rank.push(sortArr.indexOf(i)+1);
    }
    
    return rank;
}