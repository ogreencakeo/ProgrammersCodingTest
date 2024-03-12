function solution(i, j, k) {
    let sum = 0;
    for (let num = i; num <= j; num++) {
        let currentNum = num;
        while (currentNum > 0) {
            if (currentNum % 10 === k) {
                sum++;
            }
            currentNum = Math.floor(currentNum / 10);
        }
    }
    return sum;
}