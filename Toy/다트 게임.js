//https://programmers.co.kr/learn/courses/30/lessons/17682

//2018 KAKAO BLIND RECRUITMENT 다트 게임



function solution(dartResult) {

    let calNum
    let arr = [];
    for(let i =0; i < dartResult.length; i++){
        //제곱 
        let bonas
        let num

        num = dartResult[i];

        if(dartResult[i] === "1" && dartResult[i+1] === "0"){
            num = 10;
            i++;
        }
        if(dartResult[i+1] === "S"){
            bonas = 1;
        }else if(dartResult[i+1] === "D"){
            bonas = 2;
        }else if(dartResult[i+1] === "T"){
            bonas = 3;
        }

        if(!isNaN(Number(num))){
            calNum = Math.pow(Number(num), bonas)
        }

        if(dartResult[i+2] === "*"){
            calNum =+ calNum*2;
            arr[arr.length-1] = arr[arr.length-1] *2
            i+=2
        }else if(dartResult[i+2] === "#"){
            calNum =+ calNum*-1;
            i+=2
        }else{
            i++
        }
        arr.push(calNum)
    }
    const result = arr.reduce((acc,cur) => {
       return acc +cur 
    },0)
    return result;
}
