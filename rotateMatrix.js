// Prompt: you are given an n x n 2D matrix. Rotate the matrix by 90 degrees, clockwise. You must rotate the image, IN PLACE. Do not allocate another 2D matrix to do the rotation.

function rotate(matrix) {
  let n = matrix.length
  let level = 0
  let levelMax = Math.floor(n / 2) - 1
  let last = n - 1
  while (level <= levelMax) {
    for (let i = level; i < last; ++i) {
      swap([level, i], [i, last], matrix)
      swap([level, i], [last, last - i + level], matrix)
      swap([level, i], [last - i + level, level], matrix)
    }
    ++level
    --last
  }
  return matrix
}

function swap([R1, C1], [R2, C2], matrix) {
  let temp = matrix[R1][C1]
  matrix[R1][C1] = matrix[R2][C2]
  matrix[R2][C2] = temp
}

// O(N^2) time complexity
// O(1) space complexity

console.log(
  rotate([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ])
) // should return:
// [
//   [7,4,1],
//   [8,5,2],
//   [9,6,3]
// ]

console.log(
  rotate([
    [5, 1, 9, 11],
    [2, 4, 8, 10],
    [13, 3, 6, 7],
    [15, 14, 12, 16]
  ])
) // should return:
// [
//   [15,13, 2, 5],
//   [14, 3, 4, 1],
//   [12, 6, 8, 9],
//   [16, 7,10,11]
// ]
