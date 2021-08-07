//박스를 최대한 적게사용하여 짐 나르기
//인자 1: stuff
//Number 타입의 40 이상 240 이하의 자연수를 담은 배열
//ex) [70, 50, 80, 50]
//인자 2: limited
//Number 타입의 40 이상 240 이하의 자연수

function movingStuff(stuff, limit) {
  let sortedStuff = stuff.sort((a,b)=> a-b);
  let minIdx = 0;
  let maxIdx = stuff.length-1;
  let box = 0;

  while(minIdx < maxIdx){
    if(sortedStuff[minIdx] + sortedStuff[maxIdx] <= limit){
      box++;
      minIdx++;
      maxIdx--;
    }else{
      maxIdx--;
    }
  }

  return stuff.length - box; 
}

//1. 무게가 작은or큰 짐들의 순서로 나열을 한다. 
//2. 배열의 양끝을 더해보자 minIdx, maxIdx
//2-1 더했는데 무게제한보다 작거나 같아 ? 그럼 박스에 담자 box+1 박스에 담았으니 다음 짐들로 인덱스 변경 minIdx+1, maxIdx-1
//2-2 무게제한 보다 커? 박스에 못담으니까 내앞에 있는 애랑 넣을수 있는지 확인하기 위해 maxidx를 하나 앞으로 maxIdx-1
//3. 언제까지 반복할거야? maxIdx가 minIdx보다 클때까지!! 
//4. 반복 끝나면? 사용한 박스 개수 리턴 
// 배열안에 짐들의 수에서 짐이 들어간 박스의 개수를 빼면 총 사용한 박스를 구할 수 있다. 
