function solution(n, k) {
    let arr = [];
    for(let i=1; i<=n; i++){
        arr.push(i);
    }
    // n의 배수이면 해당 배열을 리턴함
    return arr.filter((v) => v%k===0)
}