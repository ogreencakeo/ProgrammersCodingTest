function solution(sides) {
    sides.sort((a, b) => a===b? 0 : a>b? -1 : 1);

    var max_num = sides[0];
    
    // 나머지 두 변의 길이 합
    var sumOfOtherSides = sides[1] + sides[2];

    // 조건에 따라 결과 반환
    if (max_num < sumOfOtherSides) {
        return 1;
    } else {
        return 2;
    }
}
