//https://programmers.co.kr/learn/courses/30/lessons/12916
//s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 하는 solution를 완성하세요.
//'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다. 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.



function solution(s){
    let pCnt = 0;
    let yCnt = 0;
    const  word = s.toUpperCase().split('');
    word.forEach((el)=>{
        if(el === "P") pCnt++;
        if(el === "Y") yCnt++;
    })
    return pCnt === yCnt ? true : false;
}
