//https://programmers.co.kr/learn/courses/30/lessons/77484

function solution(lottos, win_nums) {
    let win = [6,6,5,4,3,2,1];
    //최소등수
    let jackpot = lottos.filter((el) => win_nums.includes(el)).length;
    let findZero = lottos.filter((el)=> el ===0).length;
    
    return [win[jackpot+findZero],win[jackpot]]
}
