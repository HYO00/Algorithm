https://programmers.co.kr/learn/courses/30/lessons/86491

//모든 명함의 가로 길이와 세로 길이를 나타내는 2차원 배열 sizes가 매개변수로 주어집니다.
//모든 명함을 수납할 수 있는 가장 작은 지갑을 만들 때, 지갑의 크기를 return 하도록 solution 함수를 완성해주세요.
//명함 다른 방향으로 명함지갑에 넣을수 있다.


function solution(sizes) { 
    const sortedArr = sizes.map((el)=> el.sort((a,b) => a-b));
    const sortedW = sortArr.map((el)=> el[0]);
    const sortedH = sortArr.map((el)=> el[1]);
    return Math.max(...sortW) * Math.max(...sortH)

}
