// Prompt: Write a function that takes in a string made up of brackets ("(", "[", "{", ")", "]", and "}") and other optional characters. The function should return a boolean representing whether or not the string is balanced in regards to brackets. A string is said to be balanced if it has as many opening brackets of a given type as it has closing brackets of that type and if no bracket is unmatched. Note that a closing bracket cannot match a corresponding opening bracket that comes after it. Similarly, brackets cannot overlap each other as in "[(])".

function balancedBrackets(string) {
  let stack = []
  let brackets = {
    '{': '}',
    '[': ']',
    '(': ')'
  }
  let endBrackets = '}])'

  for (let char of string) {
    if (brackets[char]) stack.push(char)
    else if (endBrackets.includes(char)) {
      if (stack.length === 0) return false
      let endChar = stack[stack.length - 1]
      if (brackets[endChar] === char) stack.pop()
      else return false
    }
  }
  return stack.length === 0
}

// O(N) time complexity where N is the length of the input string
// O(N) space complexity where N is the length of the input string

console.log(balancedBrackets('[](){}{()}')) // should return true
console.log(balancedBrackets('](){}{()}[')) // should return false
console.log(balancedBrackets('(){}{(})')) // should return false
console.log(balancedBrackets('( hey ) []')) // should return true
