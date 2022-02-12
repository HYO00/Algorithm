//삽입 정렬을 구현

const insertionSort = function (arr) {
  let sorted = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] >= sorted[i - 1]) {
      sorted.push(arr[i]);
    } else {
      for (let j = 0; j < i; j++) {
          //두번째 요소가 첫번째 보다 같거나 작을때
        if (arr[i] <= sorted[j]) {
            //두번째요소가 이제 앞으로 가야하니까 
            //왼쪽 오른쪽 나눠서 자리 마련
          const left = sorted.slice(0, j);
          const right = sorted.slice(j);
          //왼쪽 오른쪽 사이 중간에 해당요소 삽입
          sorted = left.concat(arr[i], right);
          break;
        }
      }
    }
  }

  return sorted;
};
//기준 인덱스 비교 인덱스 
