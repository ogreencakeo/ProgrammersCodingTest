function solution(chicken) {
    let coupon = chicken; // 현재 쿠폰 수 // 초기 쿠폰 수를 주문한 치킨의 수로 설정
    let service_coupon = 0; // 서비스 쿠폰 수 
    
    while(coupon > 9 ){
        service_coupon += Math.floor(coupon / 10);
        coupon = Math.floor((coupon / 10) + (coupon % 10));
    }
    return service_coupon;
}