// The Fibonacci sequence is defined as follows: the first number of the sequence is 0, the second number is 1, and the nth number is the sum of the (n-1)th and (n-2)th numbers.

// Write a function that takes an integer n and returns the nth Fibonacci number.

// For this prompt, the first Fibonacci number is F0, so getNthFib(1) is equal to F0 and so on.

function getNthFib(n) {
  if (n === 1) return 0
  else if (n === 2) return 1
  else return getNthFib(n - 1) + getNthFib(n - 2)
}

// O(N^2) time complexity
// O(N) space complexity

console.log(getNthFib(4)) // should return 2;
console.log(getNthFib(6)) // should return 5;

// OPTIMIZED - memoization:
function getNthFibMemo(n, memo = {}) {
  if (n === 1) return 0
  else if (n === 2) return 1
  else {
    if (memo[n]) return memo[n]
    else memo[n] = getNthFibMemo(n - 1, memo) + getNthFibMemo(n - 2, memo)
  }
  return memo[n]
}

// O(N) time complexity
// O(N) space complexity

console.log(getNthFibMemo(4)) // should return 2;
console.log(getNthFibMemo(6)) // should return 5;

// OPTIMIZED - iterative:
function getNthFibIter(n, memo = {}) {
  let lastTwo = [0, 1]
  let counter = 3

  while (counter <= n) {
    let nextFib = lastTwo[0] + lastTwo[1]
    lastTwo[0] = lastTwo[1]
    lastTwo[1] = nextFib
    counter++
  }
  if (n > 1) return lastTwo[1]
  else return lastTwo[0]
}

// O(N) time complexity
// O(1) space complexity

console.log(getNthFibIter(4)) // should return 2;
console.log(getNthFibIter(6)) // should return 5;
