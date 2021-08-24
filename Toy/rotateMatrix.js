/*
rotateMatrix
문제
2차원 N x N 배열을 시계 방향으로 90도 회전시킨 배열을 리턴해야 합니다.

입력
인자 1 : matrix
가로 길이(matrix[i].length)와 세로 길이(matrix.length)가 모두 N인 2차원 배열
matrix[i][j]는 number 타입
출력
2차원 배열을 리턴해야 합니다.
*/
//90도 회전 ?
//매트릭스의 세로요소들이 가로로간다
//세로의 마지막인덱스 요소부터 가로의 첫번째 인덱스 요소로 들어간다. 

const rotateMatrix = function (matrix, k =1) {
  if(matrix.length === 0) return [];
  if(k % 4 === 0) return matrix;
  k = k % 4
  for(let i = 1; i <= k; i++){
    matrix = roate(matrix)
  }
  return matrix;
  
};

const roate = (matrix) =>{
  //세로
  let M = matrix.length; 
  //가로 
  let N = matrix[0].length;
  let result = [];
  
  for(let i =0; i < N; i++){
    result[i] = [];
    for(let j = matrix.length; j > 0; j--){
      result[i][M-j] = matrix[j-1][i]
    }
  }
  return result;
}

