function solution(a, b, c) {
    const covert = {
        'case1': (a, b, c) => a + b + c,
        'case2': (a, b, c) => (a + b + c) * (a**2 + b**2 + c**2),
        'case3': (a, b, c) => (a + b + c) * (a**2 + b**2 + c**2) * (a**3 + b**3 + c**3),
    };

    if (a === b && b === c) {
        return covert['case3'](a, b, c);
    } else if (a === b || b === c || c === a) {
        return covert['case2'](a, b, c);
    } else {
        return covert['case1'](a, b, c);
    }
}