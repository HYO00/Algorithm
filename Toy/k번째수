https://programmers.co.kr/learn/courses/30/lessons/42748

function solution(array, commands) {
    let answer = [];
    for(let i =0; i < commands.length; i++){
        let newArr = array.slice(commands[i][0]-1, commands[i][1]).sort((a, b) => a - b);;
        let num = newArr[commands[i][2]-1];
        answer.push(num);
    }
    return answer;
}

//i~j k번째 수 구하기 배열 자르기 slice
//commands을 돌면서 해당하는 값을 찾아 리턴값에 저장한다.
