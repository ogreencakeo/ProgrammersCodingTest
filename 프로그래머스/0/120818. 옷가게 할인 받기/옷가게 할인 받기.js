function solution(price) {
    var discoutRate = 0;
    
    if(price >= 500000){
        discoutRate = 0.2;
    }else if(price >= 300000){
        discoutRate = 0.1;
    }else if(price >= 100000){
        discoutRate = 0.05;
    }
    
    var discountMoney = price * ( 1 - discoutRate);
    return Math.floor(discountMoney);
}