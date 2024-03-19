function solution(my_string) {
    let arr = my_string.split(' ');
    // 첫번째 올 숫자 - 초기화
    let num = parseInt(arr[0]);
    
    for(let i=1; i<arr.length; i+=2){
        let operator = arr[i]; // 연산자
        let nextNum = parseInt(arr[i+1])// 두번재 올 숫자
        
        operator === '+' ? num+=nextNum : num-=nextNum;
    }
    return num;
}