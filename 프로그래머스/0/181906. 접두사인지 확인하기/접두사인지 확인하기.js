function solution(my_string, is_prefix) {
    // slice를 사용하여 해당 접미사를 자름
    var answer = my_string.slice(0, is_prefix.length);
    console.log(answer);
    
    // 접미사와 매개변수 is_prefix값이 같으면 1을 리턴, 아니면 0을 리턴함
    return is_prefix===answer ? 1 : 0;
}