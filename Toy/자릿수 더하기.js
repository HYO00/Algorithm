//https://programmers.co.kr/learn/courses/30/lessons/12931
//자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.

function solution(n)
{
    const numArr =  String(n).split("").map((el) => Number(el))
    const sum = numArr.reduce((acc, cur) =>{
       return acc +cur  
    },0)
    return sum;
}
