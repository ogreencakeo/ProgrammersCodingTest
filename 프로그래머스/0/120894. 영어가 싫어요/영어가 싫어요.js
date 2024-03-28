function solution(numbers) {
    let numArr = [ "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    let result = "";
    let temp = "";
    
    for(let i=0; i<numbers.length; i++){
        temp += numbers[i];
        if(numArr.includes(temp)){
            result += numArr.indexOf(temp);
            temp = "";
        }
    }
    return parseInt(result);
}
