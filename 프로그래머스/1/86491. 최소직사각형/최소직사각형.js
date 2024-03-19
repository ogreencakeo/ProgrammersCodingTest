function solution(sizes) {
    let width = Math.max(...sizes.map((v) => Math.max(...v)));
    let height = Math.max(...sizes.map((v) => Math.min(...v)));
    
    return width * height;
}