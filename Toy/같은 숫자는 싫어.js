https://programmers.co.kr/learn/courses/30/lessons/12906
//연속되는 수를 제거하고 남은 수들을 리턴하라
//배열을 돌면서 해당요소가 이전값이랑 같지않을때만 배열에 넣어준다.

function solution(arr)
{
    const newArr = [];
    arr.forEach((el,idx)=>{
        if(!newArr.length){
             newArr.push(el);
        }else if(arr[idx-1] !== el){
             newArr.push(el)
        }
    })
    return newArr;
}

//다른 사람의 풀이
function solution(arr)
{
    return arr.filter((val,index) => val != arr[index+1]);
}
