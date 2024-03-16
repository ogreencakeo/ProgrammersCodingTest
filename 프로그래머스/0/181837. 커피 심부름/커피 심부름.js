function solution(order) {
    let sum = 0;
    for(let i of order){
        let result = i.includes('americano') ? 4500 : i.includes('cafelatte') ? 5000 : 4500;
        console.log(result);
        sum += result;
    }
    return sum;
}