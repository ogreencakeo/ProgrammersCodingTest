function solution(price) {
     let discountRate = 0;

    // 50만원 이상일때 할인율은 20%
    if (price >= 500000) {
        discountRate = 0.2;
    // 30만원 이상일때 할인율은 10%
    } else if (price >= 300000) {
        discountRate = 0.1;
    // 10만원 이상일때 할인율은 5%
    } else if (price >= 100000) {
        discountRate = 0.05;
    }

    // 총 할인된 금액
    const discountedPrice = price * (1 - discountRate);

    // 버림 연산을 사용하여 소수점 이하를 버린 정수를 얻음
    const finalPrice = Math.floor(discountedPrice);

    return finalPrice;
}