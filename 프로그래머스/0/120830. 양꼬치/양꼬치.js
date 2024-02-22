function solution(n, k) {
    var lambSkewersPrice = n * 12000;
    var cokePrice = k * 2000;
    
    var serviceCnt = Math.floor(n / 10);
    var servicePrice = serviceCnt * 2000;
    
    var totalPrice = lambSkewersPrice + cokePrice - servicePrice;
    
    return totalPrice;
}