function solution(arr, queries) {
    for (let i = 0; i < queries.length; i++) {
        const [s, e] = queries[i];
        for (let j = s; j <= e; j++) {
            arr[j]++;
        }
    }
    return arr;
}