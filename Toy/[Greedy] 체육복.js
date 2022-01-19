//https://programmers.co.kr/learn/courses/30/lessons/42862

//전체 학생의 수 n, 체육복을 도난당한 학생들의 번호가 담긴 배열 lost, 
//여벌의 체육복을 가져온 학생들의 번호가 담긴 배열 reserve가 매개변수로 주어질 때, 
//체육수업을 들을 수 있는 학생의 최댓값을 return 하도록 solution 함수를 작성해주세요.

function solution(n, lost, reserve) {
    const lostArr = lost.filter((el) => !reserve.includes(el));
    let reserveArr = reserve.filter((el) => !lost.includes(el));
    
    lostArr.sort((a,b) => a-b);
    reserveArr.sort((a,b)=> a-b);
    //여러복 가지고 있는 친구가 잃어버린 친구에게 빌려줄수 있는지 확인한다.
    reserveArr.forEach((el) => {
        if(lostArr.includes(el-1)){
            let idx = lostArr.indexOf(el-1)
            lostArr.splice(idx,1)
            return;
        }else if(lostArr.includes(el+1)){
           let idx = lostArr.indexOf(el+1)
            lostArr.splice(idx,1)
            return;
        }
    })
    return n - lostArr.length;
}
//체육복 잃어버린 친구들 배열과 여벌을 가지고온 친구들 배열을 받는다.
//잃어버렸는데 여벌옷을 가지고 있다면? 빌려주지 못한다.
