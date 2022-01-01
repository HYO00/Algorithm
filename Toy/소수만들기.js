//https://programmers.co.kr/learn/courses/30/lessons/12977

function solution(nums) {
    let answer = 0;
    let length = nums.length;
    
    for (let i = 0; i < length; i++) {
      for (let j = i + 1; j < length; j++) {
        for (let k = j + 1; k < length; k++) {
          const number = nums[i] + nums[j] + nums[k];
          if (isPrime(number)) answer++;
        }
      }
    }
    function isPrime(number){
        for(let i =2; i < number/2; i++){
            if(number % i === 0) return false;
        }
        return true;
    }
    return answer;
}

//배열에 담긴 숫숫자들 중  서로 다른 3개를 고르자  -> 조합
