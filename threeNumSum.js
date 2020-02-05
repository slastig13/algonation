// Prompt: write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. The function should find all triplets in the array that sum up to the target sum and return a 2D array of all these triplets. The numbers in each triplet should be ordered in ascending order, and the triplets themselves should be ordered in ascending order with repect to the numbers they hold. If no three numbers sum up to the target sum, return an empty array.

function threeNumberSum(array, targetSum) {
  array.sort((a, b) => a - b)
  let result = []
  for (let curr = 0; curr < array.length; curr++) {
    let left = curr + 1,
      right = array.length - 1
    while (left < right) {
      let sum = array[curr] + array[left] + array[right]
      if (sum === targetSum) {
        let sub = [array[curr], array[left], array[right]]
        result.push(sub)
        left++
      }
      if (sum < targetSum) left++
      else right--
    }
  }
  return result
}

// O(N^2) time complexity
// O(N) space complexity

console.log(threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0))
