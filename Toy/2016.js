https://programmers.co.kr/learn/courses/30/lessons/12901

//2016년의 a월 b일의 요일은?

function solution(a, b) {
    const week = ['FRI','SAT','SUN','MON','TUE','WED','THU'];
    const month = [31,29,31,30,31,30,31,31,30,31,30,31];
    let day = 0;
    //month
    for(let i=0; i < a-1; i++){
        day += month[i]
    }
    //week에서 찾기
    day = (day + b-1) % 7
    return week[day];
}
//금요일부터 시작하는 요일배열 만들기 
//2016년의 해달 달의 마지막 일 배열로 저장
//입력받은 월전까지 일자를 구하고 입력받은 일도 더해줌으로 총 며칠인지 구하자
//구한 일자를 나머지 연산자로 구한다. 위크에서 인덱스로 찾기 
