// https://programmers.co.kr/learn/courses/30/lessons/12926

//어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다. 
//예를 들어 "AB"는 1만큼 밀면 "BC"가 되고, 3만큼 밀면 "DE"가 됩니다. "z"는 1만큼 밀면 "a"가 됩니다. 문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.


function solution(s, n) {
    const letters  = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let answer = '';
    for(let i = 0; i < s.length; i++){
       if(s[i] === " "){
            answer += " "
       }
        else if(s[i] === s[i].toUpperCase()){
            let lower = s[i].toLowerCase();
            let findIdx = letters.indexOf(lower);
            answer += letters[(findIdx + n) % letters.length].toUpperCase()  
            
        }else{
            let findIdx = letters.indexOf(s[i]);
            answer += letters[(findIdx + n) % letters.length]
        } 
    }

    return answer;
}
