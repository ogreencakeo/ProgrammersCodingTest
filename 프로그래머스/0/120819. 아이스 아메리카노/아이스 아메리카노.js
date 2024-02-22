function solution(money) {
    var answer = Math.floor(money / 5500);
    var answer2 = money%5500;
    var answer3 = answer2===0? 0 : answer2;
    
    var result = [];
    result.push(answer);
    result.push(answer3);
    return result;
}