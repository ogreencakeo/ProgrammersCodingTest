function solution(arr, n) {
    return arr.map((v, i) => (
        (arr.length%2 === 1 && i%2==0) ||  (arr.length%2 === 0 && i%2==1) ? v+n : v
    ))
}