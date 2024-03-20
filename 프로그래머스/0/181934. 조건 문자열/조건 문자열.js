function solution(ineq, eq, n, m) {
    const operations = {
        ">=" : (n, m) => n >= m,
        "<=" : (n, m) => n <= m,
        ">!" : (n, m) => n > m,
        "<!" : (n, m) => n < m,
    };
    
    const option = operations[ineq + eq];
    return Number(option(n, m)) ? 1 : 0;
}