//https://programmers.co.kr/learn/courses/30/lessons/12921


//1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요.

//소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다.
//(1은 소수가 아닙니다.)

function solution(n) {
    let count = 0;
    
    const isPrime = (num) => {
        let sqrt = parseInt(Math.sqrt(num));
        
        if (num % 2 === 0) {
            return false;
        }

        for (let k = 3; k <= sqrt; k += 2) {
              if (num % k === 0) {
                 return false;  
              }
           }
        return true
    }
   
    for(let i =1; i <= n; i++){
       if(isPrime(i)){
           count++;
       }
    }

    return count;
}
