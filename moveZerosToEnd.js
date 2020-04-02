/*
Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
*/

function moveZeros(nums) {
  let nextOpen = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      let temp = nums[nextOpen]
      nums[nextOpen] = nums[i]
      nums[i] = temp
      nextOpen++
    }
  }
  return nums
}

// O(N) time complexity
// O(1) space complexity

console.log(moveZeros([0, 1, 0, 3, 12]))
console.log(moveZeros([0, 0, 0, 11, 1, 0, 3, 12]))
console.log(moveZeros([0, 0, 0, 0, 0, 0, 0, 0, 0, 4]))
console.log(moveZeros([4]))
console.log(moveZeros([]))
