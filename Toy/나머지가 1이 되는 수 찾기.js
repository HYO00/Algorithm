//https://programmers.co.kr/learn/courses/30/lessons/87389
// n이 주어질 때 나머지가 1이 되는 x의 수를 찾아라


function solution(n) {
    for(let i =2; i < n; i++){
        if(n % i === 1) return i;
    }
}
