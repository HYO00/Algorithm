// 세로 길이 2, 가로 길이 n인 2 x n 보드가 있습니다. 2 x 1 크기의 타일을 가지고 이 보드를 채우는 모든 경우의 수를 리턴해야 합니다.
//입력 인자 1 : n number 타입의 1 이상의 자연수
//출력 number 타입을 리턴해야 합니다.
// 타일을 가로, 세로 어느 방향으로 놓아도 상관없습니다. 

const tiling = function (n) {
  let memo = [0,1,2];

  let fibo = (n) =>{
    if(memo[n] !== undefined){
      return memo[n]
    }
    return memo[n] = fibo(n-1) + fibo(n-2);
  }
  return fibo(n)
};

// 0개 -> 0 1개 -> 1 2개 -> 2 3개 -> 3 4개 => 5 ..
