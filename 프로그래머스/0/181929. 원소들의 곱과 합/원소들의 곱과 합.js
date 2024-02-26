function solution(num_list) {
    let multiplication = 1;
    let sum_square1 = 0;
    for(let i of num_list){
        // 모든 원소들의 곱
        multiplication *= i;
        // 모든 원소들의 합
        sum_square1 += i;
    }
    // 모든 원소들의 합의 제곱
    let sum_square2 = Math.pow(sum_square1, 2);
    return multiplication> sum_square2? 0 : 1;
}