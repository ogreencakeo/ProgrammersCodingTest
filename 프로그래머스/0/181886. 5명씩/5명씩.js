function solution(names) {
    let arr = [];
    //  5명씩 묶은 그룹이니까 i는 5의 배수로 설정해둠
    for (let i = 0; i < names.length; i += 5) {
        arr.push(names[i]);
    }
    return arr;
}
