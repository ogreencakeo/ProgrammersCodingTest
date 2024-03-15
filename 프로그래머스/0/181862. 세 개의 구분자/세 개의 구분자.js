function solution(myStr) {
    const list = myStr.split(/[a | b | c]/).filter(v => v);
    return list.length? list : ['EMPTY'];
}