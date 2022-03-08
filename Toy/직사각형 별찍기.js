//https://programmers.co.kr/learn/courses/30/lessons/12969?language=javascript

// 이 문제에는 표준 입력으로 두 개의 정수 n과 m이 주어집니다.
// 별(*) 문자를 이용해 가로의 길이가 n, 세로의 길이가 m인 직사각형 형태를 출력해보세요.

process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" "); //입력값 배열로 
    //console.log("n",n); // ['5', '3']
    const a = Number(n[0]), b = Number(n[1]);
    // console.log("a",a,"b",b) // 배열에 담긴 값 number type으로 변환
    //console.log("가로",data); //가로
    //console.log("세로",b)
    let star = ''
    for(let i =0; i < b; i++){
        for(let j = 0; j < a; j++){
            star += '*';
        }
        star += '\n'
    }
    
    console.log(star);
    
});


//다른풀이

process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    const row = '*'.repeat(a); //가로 별 찍기
    for(let i =0; i < b; i++){ //가로별을 세로줄만큼 반복 
        console.log(row)
    }

});
