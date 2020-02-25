// Prompt: Given an array of positive integers representing coin denominations and a single non-negative integer representing a target amount of money, implement a function that returns the number of ways to make change for that target amount using the given coin denominations. Note that an unlimited amount of coins is at your disposal.

function numberOfWaysToMakeChange(n, denoms) {
  let ways = new Array(n + 1).fill(0)
  ways[0] = 1

  for (let d of denoms) {
    for (let i = 1; i < ways.length; i++) {
      if (d <= i) ways[i] += ways[i - d]
    }
  }
  return ways[n]
}

// O(n*d) time complexity where d is length of denoms
// O(n) space complexity

console.log(numberOfWaysToMakeChange(6, [5, 1])) // should return 2
