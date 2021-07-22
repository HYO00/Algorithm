fibonacci memoization

function fibonacci(n) {
  let memo = [0,1]
  const fibo= (n)=>{
    if(memo[n] !== undefined) return memo[n];
    else{
      memo[n] = fibo(n-1)+fibo(n-2)
    }
  
    return memo[n]
  }
  return fibo(n)
}
// memo에 저장하고 필요할 때 꺼내 쓰자!
