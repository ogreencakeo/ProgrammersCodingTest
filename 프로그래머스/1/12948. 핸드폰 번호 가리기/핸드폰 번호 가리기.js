function solution(phone_number) {
    let result = '';
    for(let i=0; i< phone_number.length - 4; i++){
        result += '*';
    }
    console.log(result);
    return result + phone_number.slice(-4);
}