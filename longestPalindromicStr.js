// Write a function that, given a string, returns its longest palindromic substring. A palindrome is defined as a string that is written the same forward and backward. Assume that there will only be one longest palindromic substring.

// Optimized:

function longestPalindromicSubstring(string) {
  if (string.length === 1) return string
  let longest = [0, 1]

  for (let i = 1; i < string.length; i++) {
    let odd = getLongestPalindrome(string, i - 1, i + 1)
    let even = getLongestPalindrome(string, i - 1, i)
    let currLongest = odd[1] - odd[0] > even[1] - even[0] ? odd : even
    longest =
      longest[1] - longest[0] > currLongest[1] - currLongest[0]
        ? longest
        : currLongest
  }
  return string.slice(longest[0], longest[1])
}

function getLongestPalindrome(str, left, right) {
  while (left >= 0 && right < str.length) {
    if (str[left] !== str[right]) break
    else {
      left--
      right++
    }
  }
  return [left + 1, right]
}

// O(N^2) time complexity where N is the length of the input string
// O(1) space complexity

// Naive:

function longestPalindromicSubstring(string) {
  let longest = ''
  if (string.length === 1) return string // edge case
  for (let i = 0; i < string.length; i++) {
    for (let j = i + 1; j < string.length; j++) {
      if (string[i] === string[j]) {
        let sub = string.slice(i, j + 1)
        if (isPalindrome(sub)) {
          if (sub.length > longest.length) longest = sub
        }
      }
    }
  }
  return longest
}

function isPalindrome(str) {
  let left = 0,
    right = str.length - 1
  while (left < right) {
    if (str[left] !== str[right]) return false
    else {
      left++
      right--
    }
  }
  return true
}

// O(N^3) time complexity where N is the length of the input string
// O(1) space complexity

console.log(longestPalindromicSubstring('abbcbbacdjabba')) // should return 'abbcbba'
