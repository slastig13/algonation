// Prompt: write a function that takes in an array of integers and returns a sorted version of that array. Use the Insertion Sort algorithm to sort the array.

function insertionSort(array) {
  // Write your code here.
  for (let i = 1; i < array.length; i++) {
    let j = i - 1
    if (array[i] < array[j]) swap(i, j, array)
  }
  return array
}

function swap(i, j, array) {
  while (array[i] < array[j] && j >= 0) {
    let temp = array[j]
    array[j] = array[i]
    array[i] = temp
    j--
    i--
  }
}

// O(N^2) time complexity
// O(1) space complexity

console.log(insertionSort([8, 9, 0, 1, 3, 6, 8, 4])) // should return [0,1,3,4,6,8,8,9]
