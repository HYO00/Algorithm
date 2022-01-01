
https://programmers.co.kr/learn/courses/30/lessons/42840

function solution(answers) {
   let result = [];
   let answerNum = [0,0,0];
   let first = [1,2,3,4,5];
   let second = [2, 1, 2, 3, 2, 4, 2, 5];
   let third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    //정답지에 수포자들의 정답이 있는지 확인
    for(let i =0; i < answers.length; i++){
        if(answers[i] === first[i%5]){
            answerNum[0]++
        }
        if(answers[i] === second[i%8]){
              answerNum[1]++
        }
        if(answers[i] === third[i%10]){
            answerNum[2]++
        }
    }
    let maxNum = Math.max(...answerNum)
    answerNum.map((el, idx)=>{
        if(maxNum === el){
            result.push(idx+1)
        }
    })
     return result; 
}

//answers 정답이 담긴 배열 
// 정답과 해당 답안지가 몇개가 일치하는지 구해야한다. 
// answers의 길이에 따라 수포자들의 답안지 길이도 반복 
// first = [1,2,3,4,5]
// second = [2, 1, 2, 3, 2, 4, 2, 5]
// third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
