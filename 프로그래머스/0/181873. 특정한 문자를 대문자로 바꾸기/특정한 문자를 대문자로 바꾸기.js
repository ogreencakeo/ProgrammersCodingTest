function solution(my_string, alp) {
    var arr = my_string.split('');
    return arr.map((v)=> v==alp ? v.toUpperCase() : v).join('');
}