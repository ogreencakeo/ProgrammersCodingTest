function solution(arr1, arr2) {
    let arr1_sum = 0;
    let arr2_sum = 0;
    
    if(arr1.length>arr2.length){
        return 1;
    }else if(arr1.length<arr2.length){
        return -1;
    }else if(arr1.length===arr2.length){
       // 배열의 길이가 같다면 각 원소들의 합이 큰 쪽이 더 큼
        for(let i of arr1){
            arr1_sum+=i;
        }
        for(let i of arr2){
            arr2_sum+=i;
        }
        return arr1_sum>arr2_sum ? 1 : arr1_sum<arr2_sum ? -1 : 0;
    }
}