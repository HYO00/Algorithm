//https://programmers.co.kr/learn/courses/30/lessons/72410
//신규 아이디 추천

function solution(new_id) {
    //1단계
    new_id = new_id.toLowerCase();
    //2단계
    new_id = new_id.replace(/[^a-z0-9-_.]/g,"");
    //3단계
    new_id = new_id.replace(/\.+/g,".");
    //4단계
    new_id = new_id.replace(/^\.|\.$/g,"");
    //5단계
    if(!new_id.length){
        new_id = "a" 
    }
    //6단계 
    if(new_id.length >=16){
        new_id =new_id.substr(0,15)
    }
    new_id =new_id.replace(/\.$/,"");
    //7단계
    if(new_id.length <=2){
        new_id = new_id + new_id.charAt(new_id.length-1).repeat(3 - new_id.length);
    }
    return new_id;
}
