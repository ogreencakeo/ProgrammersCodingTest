function solution(my_string, num1, num2) {
    let str_arr = my_string.split('');
    
    // num1과 num2에 해당하는 문자를 서로 바꿈
    let temp = str_arr[num1];
    str_arr[num1] = str_arr[num2];
    str_arr[num2] = temp;
    
    return str_arr.join('');
}