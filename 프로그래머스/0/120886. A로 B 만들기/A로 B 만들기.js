function solution(before, after) {
    const beforeStr = before.split('').sort().join('');
    const afterStr = after.split('').sort().join('');
    return beforeStr === afterStr ? 1 : 0
}