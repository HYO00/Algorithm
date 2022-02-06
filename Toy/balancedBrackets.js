//문자열을 입력받아 문자열 내의 모든 괄호의 짝이 맞는지 여부를 리턴해야 합니다.
//괄호의 종류는 (, )만 고려합니다.
//괄호는 먼저 열리고((), 열린만큼만 닫혀야()) 합니다.
//빈 문자열을 입력받은 경우, true를 리턴해야 합니다.
//let output3 = balancedBrackets('[(]{)}');
//console.log(output); // --> false

const balancedBrackets = function (str) {
  if(str === '') return true;
  if(str.length%2 === 1) return false;
  
  const left =['(',  '{' , '['];
  const right = [')', '}', ']'];

  const arr = str.split('');
  for(let i =0; i < arr.length; i++){
    
    if(right.includes(arr[i])){
      for(let j =0; j < right.length; j++){
        if(arr[i] === right[j] && arr[i-1] === left[j]){
          arr.splice(i-1,2)
          i=0;
        }
        
      }
    }
  }
  return arr.length === 0 ? true : false;
};
