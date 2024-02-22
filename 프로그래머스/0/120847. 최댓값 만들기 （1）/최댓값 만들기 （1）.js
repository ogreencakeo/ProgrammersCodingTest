function solution(numbers) {
    var max_num = Math.max(...numbers);
    numbers.splice(numbers.indexOf(max_num),1);
    var second_num = Math.max(...numbers);
    return max_num * second_num;
}