// Prompt: write a function that takes in an array of integers and returns a sorted version of that array. Use the selection sort algorithm to sort the array.

function selectionSort(array) {
  let smallestNum = Infinity,
    smallestIdx = 0,
    placeholder = 0
  while (placeholder < array.length - 1) {
    for (let i = placeholder; i < array.length; i++) {
      if (array[i] < smallestNum) {
        smallestNum = array[i]
        smallestIdx = i
      }
    }
    swap(smallestIdx, placeholder, array)
    ++placeholder
    smallestNum = Infinity
  }
  return array
}

function swap(smallestIdx, placeholder, array) {
  let temp = array[placeholder]
  array[placeholder] = array[smallestIdx]
  array[smallestIdx] = temp
}

// O(N^2) time complexity
// O(1) space complexity

console.log(selectionSort([8, 9, 4, 0, 1, 6, 7, 3, 1])) // should return [0,1,1,3,4,6,7,8,9]
