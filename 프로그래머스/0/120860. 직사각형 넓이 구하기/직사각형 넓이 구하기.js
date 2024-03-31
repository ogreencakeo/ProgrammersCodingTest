function solution(dots) {
    // 가장 큰 x의 값 - 가장 작은 x의 값 = 가로 길이
    let width = Math.max(...dots.map((v) => v[0])) - Math.min(...dots.map((v) => v[0]));
    // 가장 큰 y의 값 - 가장 작은 y의 값 = 세로 길이
    let height = Math.max(...dots.map((v) => v[1])) - Math.min(...dots.map((v) => v[1]));
    return width * height;
}