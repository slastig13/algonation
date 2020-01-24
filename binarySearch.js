// Write a function that takes in a sorted array of integers and a target integer. The function should use the Binary Search algorithm to find if the target number is contained in the array and should return its index. If it is not found in the array, return -1.

function binarySearch(array, target) {
  let left = 0
  let right = array.length - 1
  let mid = Math.floor(array.length / 2)

  while (left <= right) {
    if (target === array[mid]) return mid
    if (target < array[mid]) right = mid - 1
    if (target > array[mid]) left = mid + 1
    mid = Math.floor((right + left) / 2)
  }
  return -1
}

// O(log(N)) time complexity
// O(1) space complexity

console.log(binarySearch([0, 2, 6, 8, 10, 12], 6)) // should return 2
console.log(binarySearch([0, 2, 6, 8, 10, 12], 12)) // should return 5
