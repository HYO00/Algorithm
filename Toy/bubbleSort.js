

const bubbleSort = function (arr) {
  
  //arr의 길이까지 배열을 돌면서 
  for(let i =0; i < arr.length; i++){
    let swap = false;
    // j < arr.length-1
    for(let j = 0; j < arr.length-1-i; j++){
      //arr의 첫요소가 다음요소 보다 크면 
      if(arr[j] > arr[j+1]){
        [arr[j+1], arr[j]] = [arr[j], arr[j+1]]
        //swap이 일어났으니까 true; 
        swap = true;
      } 
    }
    //swap이 false 일어나지 않으면 정렬이 끝났다는 의미 
   if(!swap) break;
  }
  //정렬된 배열 리턴 
  return arr;
};
