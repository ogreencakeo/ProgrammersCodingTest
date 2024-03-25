function solution(strings, n) {
    return strings.sort((a, b) => {
        if (a[n] === b[n]) {
            return a.localeCompare(b); // 두 문자열을 사전 순으로 비교
        } else {
            return a[n].localeCompare(b[n]); // 인덱스 n번째 문자를 비교
        }
    });
}
