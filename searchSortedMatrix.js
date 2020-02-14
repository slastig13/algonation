// Prompt: You are given a two-dimensional array (matrix) of distinct integers where each row is sorted and each column is also sorted. The matrix does not necessarily have the same height and width. You are also given a target number, and you must write a function that returns an array of the row and column indices of the target number if it is contained in the matrix and [-1, -1] if it is not contained in the matrix.

function searchInSortedMatrix(matrix, target) {
  let row = 0,
    column = matrix[0].length - 1

  while (row < matrix.length && column >= 0) {
    let topMost = matrix[row][column]
    if (topMost === target) return [row, column]
    if (topMost > target) column--
    else row++
  }
  return [-1, -1]
}

// O(N + M) time complexity where N is the length of the rows and M is the length of the columns in the matrix
// O(1) space complexity

console.log(
  searchInSortedMatrix(
    [
      [1, 4, 7, 12, 15, 1000],
      [2, 5, 19, 31, 32, 1001],
      [3, 8, 24, 33, 35, 1002],
      [40, 41, 42, 44, 45, 1003],
      [99, 100, 103, 106, 128, 1004]
    ],
    44
  )
) // should return [3,3]
console.log(
  searchInSortedMatrix(
    [
      [1, 4, 7, 12, 15, 1000],
      [2, 5, 19, 31, 32, 1001],
      [3, 8, 24, 33, 35, 1002],
      [40, 41, 42, 44, 45, 1003],
      [99, 100, 103, 106, 128, 1004]
    ],
    43
  )
) // should return [-1,-1]
