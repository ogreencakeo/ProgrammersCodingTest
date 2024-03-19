function solution(arr) {
    var stk = [];
    for(let i=0; i<arr.length; i++){
        if(stk.length === 0){
            stk.push(arr[i])
        }else if(stk[stk.length - 1] < arr[i]){
            stk.push(arr[i]);
        }else if(stk[stk.length - 1] >= arr[i]){
            stk.pop();
            // 스택에서 값이 제거되었으므로 현재 인덱스를 감소시켜서 이전에 비교하지 않은 값과 다시 비교
            i--;
        }
    }
    return stk;
}