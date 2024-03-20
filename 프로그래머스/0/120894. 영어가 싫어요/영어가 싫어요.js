function solution(numbers) {
    let numArr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    
    numArr.forEach((v, i) => {
        numbers = numbers.replaceAll(v, i);
    });
    
    return Number(numbers);
}