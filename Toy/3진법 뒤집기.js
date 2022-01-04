//https://programmers.co.kr/learn/courses/30/lessons/68935/solution_groups?language=javascript&type=my


function solution(n) {
  let answer = n.toString(3);
  answer = answer.split("").reverse().join("");
  answer = parseInt(answer, 3);
  return answer;
}
