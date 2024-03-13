function solution(my_string, s, e) {
    let arr = my_string.substring(s, e+1).split('').reverse();
    console.log(arr);
    return my_string.substr(0, s) + arr.join('')+ my_string.substr(e+1);
}