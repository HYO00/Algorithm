//https://programmers.co.kr/learn/courses/30/lessons/77884

function solution(left, right) {
    let arrNum = [];
    let result = 0;
    for(let i =left; i <= right; i++){
        let count = 0;
        for(let j =1; j <= i; j++){
             if(i % j === 0){
                 count++
             }
        }
        if(count % 2 === 0){
            result +=i;
        }else{
            result -= i;
        }
    }
    return result;
}

//또다른 풀이 
function solution(left, right) {
    let answer = 0;
    for (let i = left; i <= right; i++) {
        //제곱근이 정수면 약수의 갯수가 홀수 ex) i가 9이면 9의 제곱근은 3이며 약수는 1,3,9
        if (Number.isInteger(Math.sqrt(i))) {
            answer -= i;
        } else {
            answer += i;
        }
    }
    return answer;
}

//left~rigth까지 수가 있다. 해당 숫자에 대한 약수가 몇개인지 구한다.
//해당 수의 약수가 짝수이면 더하고 
//홀수이면 뺀다. 
//약수 - 어떤수를 나누어 떨어지게 하는수
