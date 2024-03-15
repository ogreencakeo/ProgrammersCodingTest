function solution(arr, queries) {
    for(let i of queries){
        const [a, b ,c] = i;
        for(let j=a; j<=b; j++){
            if(j % c===0){
                arr[j]++;
            }
        }
    }
    return arr;
}