function solution(my_string) {
    var aeiou = ['a', 'e', 'i', 'o', 'u'];
    var arr = my_string.split('');
    var answer = [];
    for(let i of arr){
        if(!aeiou.includes(i)){
            answer.push(i);
        }
    }
    return answer.join('');
}