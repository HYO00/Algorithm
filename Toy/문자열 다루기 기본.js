//https://programmers.co.kr/learn/courses/30/lessons/12918
//문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.

function solution(s) {
    let answer = false;
    if(s.length === 4 || s.length === 6){
        answer = true;
    }
    s = s.split('').map((el)=> Number(el));
    s.map((el) => {
        if(!el && el !==0){
            answer = false;
        }})
    return answer
}

//다른풀이
functiohn solution(s) {
  return s.length === 4 || s.length === 6 ? !isNaN(s) : false;
}

//isNaN -> The isNaN() function determines whether a value is NaN or not.
