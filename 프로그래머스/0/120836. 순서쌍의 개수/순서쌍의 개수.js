function solution(n) {
      // cnt값은 초기값으로 0을 설정해준다.
      let cnt = 0;
      // for문을 통해 n만큼 반복해준다. 
      for(let i = 1; i<=n; i++){
          // n이 i의 약수인경우 (나머지가 0일경우)
          // cnt의 값을 ++ 해준다.
          if(n % i == 0) cnt++;
      }
      return cnt;
  }