function solution(s) {
    let stack = [];
    let ans = [];
    
    for(let i = 0; i < s.length; i++){
        if(!stack.includes(s[i])){
            ans.push(-1); // 한번도 등장하지 않을시 -1 추가
            stack.push(s[i]); // 현재 문자를 stack에 추가
            continue;
        }
        
        if(stack.includes(s[i])){
            // 이전에 등장한 위치까지의 거리를 계산
            ans.push(stack.length - stack.lastIndexOf(s[i]));
            stack.push(s[i]);
            continue;
        }
    }
    
    return ans;
}