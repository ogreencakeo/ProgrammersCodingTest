function solution(my_string) {
    // 모음의 배열     
    var aeiou = ['a', 'e', 'i', 'o', 'u'];
    // 매개변수를 배열의 형태로 나타내기 위해 split() 함수 사용     
    var arr = my_string.split('');
    // answer은 빈배열임 
    // -> 모음을 제거한 문자열을 담기 위해서     
    var answer = [];
    // 매개변수를 for문으로 돌려줌    
    for(let i of arr){
    // 모음 배열이 매개변수 i가 포함되지 않다면
    // 즉, 모음을 제거한 문자열이면 빈 배열 answer에다가 push를 해줌         
        if(!aeiou.includes(i)){
            answer.push(i);
        }
    }
    // 문자열로 나타내기 위해 다시 join('')을 사용함     
    return answer.join('');
}