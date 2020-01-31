function knuthMorrisPrattAlgorithm(string, substring) {
  let pattern = Array(substring.length).fill(0)
  let i = 0,
    j = 1

  if (substring.length > string.length) return false

  while (j < substring.length) {
    if (substring[i] === substring[j]) {
      pattern[j] = i + 1
      j++
      i++
    } else {
      j++
    }
  }
  i = 0
  j = 0
  while (j < string.length && i < substring.length) {
    if (string[j] === substring[i]) {
      if (i === substring.length - 1) return true
      j++
      i++
    } else {
      if (i > 0) {
        i = pattern[i - 1]
        if (string[j] === substring[i]) {
          if (i === substring.length - 1) return true
          i++
          j++
        } else {
          j++
          i = 0
        }
      } else {
        j++
      }
    }
  }
  return false
}

// O(N) time complexity where N is the number of characters in string
// O(M) space complexity where M is the number of characters in substring

// "IN PROGRESS" because I would like to refactor code using helper functions

console.log(knuthMorrisPrattAlgorithm('heyjkdadfsg', 'hey')) // true
console.log(knuthMorrisPrattAlgorithm('abcabcabcjabc', 'abcj')) // true
console.log(knuthMorrisPrattAlgorithm('heyjkdadfsg', 'heyey')) // false
