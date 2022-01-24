//https://programmers.co.kr/learn/courses/30/lessons/82612


//놀이기구를 count번 타게 되면 현재 자신이 가지고 있는 금액에서 얼마가 모자라는지를 return 하도록 solution 함수를 완성하세요.
//단, 금액이 부족하지 않으면 0을 return 하세요.

function solution(price, money, count) {
    let sumPrice = 0;
    for(let i =1; i <= count; i++){
       sumPrice += price*i
    }
    const result = sumPrice < money ? 0 : sumPrice - money;
    
    return result;
}
