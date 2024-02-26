function solution(num_list) {
    let multiplication = 1;
    let sum_square = 0;
    for(let i of num_list){
        // 모든 원소들의 곱
        multiplication *= i;
        // 모든 원소들의 합
        sum_square += i;
    }
    // 모든 원소들의 합의 제곱

    return multiplication> Math.pow(sum_square, 2)? 0 : 1;
}