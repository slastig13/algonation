// Prompt: write a function that takes in a non-empty string and that returns a booleen representing whether or not the string is a palindrome. A palindrome is defined as a string that is written the same forward or backward.

function isPalindrome(string) {
  let left = 0
  let right = string.length - 1

  while (left <= right) {
    if (string[left] !== string[right]) return false
    left++
    right--
  }
  return true
}

// O(N) time complexity
// O(1) space complexity

console.log(isPalindrome('abcba')) // should return true
