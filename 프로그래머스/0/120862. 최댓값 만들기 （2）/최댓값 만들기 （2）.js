function solution(numbers) {
    numbers.sort((a, b) => a===b? 0 : a>b ? -1 : 1);
    return Math.max(numbers[0] * numbers[1] , numbers[numbers.length -1] * numbers[numbers.length - 2]);
}