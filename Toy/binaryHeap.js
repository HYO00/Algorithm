//이진 힙은 트리 객체를 이용해 구현할 수도 있고, 배열로도 구현할 수 있다.
//이진 힙은 노드의 값이 특정한 순서를 가지고 있는 완전 이진 트리(Complete Binary Tree)이다. 
//완전 이진 트리는 노드가 낮은 레벨부터 채워지고, 같은 레벨에서는 왼쪽부터 채워지기 때문에 배열로 구현하는 것이 쉽다.
//최대 힙에서는 오직 부모 노드와 직계 자식들 간의 관계만 유지
//힙은 최대 혹은 최소 값을 삭제할 때 사용한다. 힙은 최대/최소값에 접근하는데 O(1) 시간이 소비된다. 힙은 우선순위 큐를 구현하는데 사용된다.

//최대 힙(max heap) 구현

function swap(idx1, idx2, arr) {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

//parent node i left node  = 2i *1 right node = 2i *2
//search parentIdx
function getParentIdx(idx) {
  return Math.floor((idx-1)/2)
}
// currentIdx 들어오는 heap의 가장 마지막 index
// currentIdx의 parentIdx 찾기 
// swap이 일어나는 경우 생각해보기 
// 값을 바꿔줬으면 인덱스값도 바꿔주자 
function insert(heap, item) {
  heap.push(item);
  let currentIdx = heap.length-1; 
  let parentIdx = getParentIdx(currentIdx)

  while(parentIdx >=0 && heap[currentIdx] > heap[parentIdx]){
    swap(currentIdx, parentIdx, heap)
    currentIdx = parentIdx;
    parentIdx = getParentIdx(currentIdx);
  }
  return heap;
}

const binaryHeap = function (arr) {
  return arr.reduce((heap, item) => {
    return insert(heap, item);
  }, []);
};
