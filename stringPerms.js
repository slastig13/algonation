// Prompt: write a function that takes in two strings and returns a booleen value representing whether or not the strings are permutations of each other. Assume both strings consist only of characters in the English alphabet. Assume upper case letters are different than their lower case counterparts (i.e. E is not the same as e).

function strPerms(stringOne, stringTwo) {
  let map = {}
  if (stringOne.length !== stringTwo.length) return false

  for (let char of stringOne) {
    if (map[char]) map[char]++
    else map[char] = 1
  }
  for (let char of stringTwo) {
    if (map[char] && map[char] > 0) map[char]--
    else return false
  }
  return true
}

// O(N) time complexity
// O(N) space complexity

console.log(strPerms('peep', 'eppe')) // should return true
console.log(strPerms('Peep', 'epep')) // should return false
console.log(strPerms('Pe ep', 'ePe p')) // should return true
console.log(strPerms('Pe ep', 'ePep')) // should return false
