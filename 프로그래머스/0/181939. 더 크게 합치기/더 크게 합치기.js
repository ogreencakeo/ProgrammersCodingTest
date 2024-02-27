function solution(a, b) {
    let a_b = parseInt(a.toString() + b.toString());
    let b_a = parseInt(b.toString() + a.toString());
    
    return a_b === b_a ? a_b : a_b > b_a? a_b : b_a;
}