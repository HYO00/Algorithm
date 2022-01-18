//https://programmers.co.kr/learn/courses/30/lessons/42576

//마라톤 참가자와 완주자 배열을 받아 완주하지 못한 선수를 찾아라!

function solution(participant, completion) {
 
    participant.sort();
    completion.sort();
    for(let i=0; i < participant.length; i++){
        if(participant[i] !== completion[i]){
            return participant[i]
        }
    }
}
