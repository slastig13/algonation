// Prompt: You are given a non-empty array of integers. Each element represents the maximum number of steps you can take forward. For example, if the element at index 1 is 3, you can go from index 1 to index 2, 3, or 4. Write a function that returns the minimum number of jumps needed to reach the final index. Note that jumping from index i to index i + x always constitutes 1 jump, no matter how large x is.

function minNumberOfJumps(array) {
  if (array.length === 1) return 0

  let jumps = new Array(array.length).fill(Infinity)
  jumps[0] = 0

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j <= array[i] + i && j < jumps.length; j++) {
      jumps[j] = Math.min(jumps[j], jumps[i] + 1)
    }
  }
  return jumps[array.length - 1]
}

// O(N^2) time complexity
// O(N) space complexity

console.log(minNumberOfJumps([3, 4, 2, 1, 2, 3, 7, 1, 1, 1, 3])) // should return 4
console.log(minNumberOfJumps([2, 1, 1, 1, 1, 4, 1])) // should return 5
