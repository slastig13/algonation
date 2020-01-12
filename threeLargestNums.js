// Prompt: write a function that takes in an arry of integers and returns a sorted array of the 3 largest integers in the input array.

function threeLargestNumbers(array) {
  let largest = [-Infinity, -Infinity, -Infinity]
  for (let element of array) {
    updateLargest(largest, element)
  }
  return largest
}

// O(N) time complexity
// O(1) space complexity

function updateLargest(largest, number) {
  if (largest[2] === -Infinity || number > largest[2]) {
    shiftAndUpdate(largest, number, 2)
  } else if (largest[1] === -Infinity || number > largest[1]) {
    shiftAndUpdate(largest, number, 1)
  } else if (largest[0] === -Infinity || number > largest[0]) {
    shiftAndUpdate(largest, number, 0)
  }
}

function shiftAndUpdate(largest, number, index) {
  for (let i = 0; i <= index; i++) {
    if (i === index) {
      largest[i] = number
    } else {
      largest[i] = largest[i + 1]
    }
  }
}

function threeLargestNumbers2(array) {
  let sorted = array.sort((a, b) => a - b)
  return sorted.slice(-3)
}

// O(N * Log(N)) time complexity
// O(1) space complexity

console.log(threeLargestNumbers([158, -2, -4, 64, -1, 0]))
console.log(threeLargestNumbers2([158, -2, -4, 64, -1, 0]))
