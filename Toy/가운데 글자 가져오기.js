//https://programmers.co.kr/learn/courses/30/lessons/12903
//단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.
//substr (시작인덱스, 길이), substring(시작인덱스, 종료인덱스)

function solution(s) {
 
    const half = Math.floor(s.length /2);
   
    return s.length % 2 === 0 ? s.substr(half-1,2) :s.substr(half,1);
}
