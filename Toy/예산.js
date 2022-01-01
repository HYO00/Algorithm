//https://programmers.co.kr/learn/courses/30/lessons/12982

function solution(d, budget) {
    let count = 0;
    //최대한 많은 부서에게 주기위해 오름차순으로 정렬
    d.sort((a,b)=> a-b);
    for(let i =0; i < d.length; i++){
        if(budget - d[i] >= 0){
            budget -= d[i];
            count++
        }
    }
    return count;
}
