function solution(x1, x2, x3, x4) {
    let result1 = x1 || x2; // (x1 ∨ x2)
    let result2 = x3 || x4; // (x3 ∨ x4)
    return result1 && result2; // (x1 ∨ x2) ∧ (x3 ∨ x4)
}