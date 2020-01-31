function knuthMorrisPrattAlgorithm(string, substring) {
  let pattern = buildPattern(substring)
  return findSubstring(string, substring, pattern)
}

function buildPattern(substring) {
  let i = 0,
    j = 1
  let pattern = Array(substring.length).fill(0)
  while (j < substring.length) {
    if (substring[i] === substring[j]) {
      pattern[j] = i + 1
      j++
      i++
    } else {
      j++
    }
  }
  return pattern
}

function findSubstring(string, substring, pattern) {
  let i = 0,
    j = 0
  while (j < string.length) {
    if (string[j] === substring[i]) {
      if (i === substring.length - 1) return true
      j++
      i++
    }
    if (string[j] !== substring[i]) {
      if (i > 0) i = pattern[i - 1]
      else j++
    }
  }
  return false
}

// O(N + M) time complexity where N is length of string and M is length of substring
// O(M) space complexity where M is length of substring

console.log(knuthMorrisPrattAlgorithm('heyjkdadfsg', 'hey')) // true
console.log(knuthMorrisPrattAlgorithm('abcabcabcjabc', 'abcj')) // true
console.log(knuthMorrisPrattAlgorithm('heyjkdadfsg', 'heyey')) // false
