//정수를 요소로 갖는 배열을 입력받아 오름차순으로 정렬하여 리턴

const quickSort = function (arr) {
  if(arr.length <= 1) return arr;
  const left = []
  const right = []
  const pivot= arr[0];

  for(let i =1; i < arr.length; i++){
    if(arr[i] < pivot) left.push(arr[i])
    else right.push(arr[i])
  }

  const leftSorted = quickSort(left);
  const rightSorted = quickSort(right);

  return [...leftSorted, pivot, ...rightSorted]

};
//pivot 요소선택
//pivot 보다 작은요소 왼쪽 
//pivot 보다 큰요소 오른쪽 
//start  pivot 보다 작은요소 무시하면서 뒤로 
//end  pivot 보다 큰요소 무시하면서 앞으로 
//둘이 만나서 지나치면 작은값 / 큰값 정렬   
