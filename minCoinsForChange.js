// Prompt: Given an array of positive integers representing coin denominations and a single non-negative integer representing a target amount of money, implement a function that returns the smallest number of coins needed to make change for that target amount using the given coin denominations. Note that an unlimited amount of coins is at your disposal. If it is impossible to make change for the target amount, return -1.

function minNumberOfCoinsForChange(n, denoms) {
  let minArray = new Array(n + 1).fill(Infinity)
  minArray[0] = 0

  for (let denom of denoms) {
    for (let i = 0; i < minArray.length; i++) {
      if (denom <= i) {
        minArray[i] = Math.min(minArray[i], minArray[i - denom] + 1)
      }
    }
  }

  return minArray[n] === Infinity ? -1 : minArray[n]
}

// O (N*D) time complexity where N is n and D is the length of denoms
// O (N) space complexity where N is n

console.log(minNumberOfCoinsForChange(7, [1, 5, 10])) // should return 3
