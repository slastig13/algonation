// Prompt: write a function that takes in a non-empty array of distinct integers and a target sum integer. If any two numbers in the array sup to the target sum, the function should return them in an array. If no two numbers sum up to the target, return an empty array. Assume at most one pair is summing up.

function twoNumberSum(array, targetSum) {
  let hash = {}

  for (let i = 0; i < array.length; i++) {
    let element = array[i]

    let missingNum = targetSum - element
    if (hash[missingNum]) {
      return [missingNum, element]
    }
    if (!hash[element]) {
      hash[element] = element
    }
  }
  return []
}

// O(N) time complexity
// O(N) space complexity

function twoNumberSum2(array, targetSum) {
  let sorted = array.sort((a, b) => a - b)

  let leftIdx = 0
  let rightIdx = sorted.length - 1

  while (leftIdx < rightIdx) {
    let currentSum = sorted[leftIdx] + sorted[rightIdx]
    if (currentSum === targetSum) {
      return [sorted[leftIdx], sorted[rightIdx]]
    } else if (currentSum < targetSum) {
      leftIdx += 1
    } else if (currentSum > targetSum) {
      rightIdx -= 1
    }
  }
  return []
}

console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10))
console.log(twoNumberSum2([3, 5, -4, 8, 11, 1, -1, 6], 10))

// O(N * log(N)) time complexity
// O(1) space complexity
