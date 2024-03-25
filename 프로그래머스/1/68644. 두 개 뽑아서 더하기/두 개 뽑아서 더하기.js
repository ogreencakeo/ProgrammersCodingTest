function solution(numbers) {
    let answer = [];
    let result = new Set();
    for(let i=0; i<numbers.length; i++){
        for(let j=i+1; j<numbers.length; j++){
            let sum = numbers[i] + numbers[j];
            result.add(sum);
        }
    }
    answer = [...result].sort((a, b) => a>b ? 1 : -1);
    return answer;
}