function solution(my_string) {
    // 알파벳 개수를 저장할 배열
    let cnt = Array(52).fill(0);
    
    for(let i=0; i<my_string.length; i++){
        let char = my_string[i];
        
        // 대문자
        if('A' <= char && 'Z' >= char){
            cnt[char.charCodeAt(0) - 'A'.charCodeAt(0)] += 1;
        } 
        // 소문자
        else if('a' <= char && 'z' >= char){
            cnt[char.charCodeAt(0) - 'a'.charCodeAt(0) + 26] += 1;
        }
    }
    return cnt;
}