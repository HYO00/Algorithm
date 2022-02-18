//기수 정렬(radix sort)은 내부적으로 계수 정렬(counting sort)을 사용합니다.
//arr[i]의 범위가 정수 전체로 확대될 경우, 기수 정렬 알고리즘을 완성해 보세요.

function radixSort(arr) {
  //max min 찾찾기기
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  //min~max까지 저장할 객체 생성
  const save = {};
  //객체 채우기 
  for(let i =min; i <= max; i++){
    save[i] = 0;
  }
  //arr 순회 배열 요소 저장 count 1씩 증가
  for(let i =0; i < arr.length; i++){
    save[arr[i]] =save[arr[i]] +1
  }
  let sortedArr = [];
  for(let i =min; i <= max; i++){
    while(save[i] > 0){
     sortedArr.push(i)
     save[i]--;
    }
  }
  return sortedArr;
}
