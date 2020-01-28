// Prompt: write a function that takes in an arry of integers and returns a sorted version of that array using the bubble sort algorithm.

function bubbleSort(array) {
  let flag = 0
  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[i + 1]) {
      let temp = array[i]
      array[i] = array[i + 1]
      array[i + 1] = temp
      flag++
    }
  }
  if (flag) bubbleSort(array)
  return array
}

// O(N^2) time complexity -- explanation: for each element in the array, bubble sort does N - 1 comparisons or O(N) comparisons. Because the array contains N elements, it has O(N) number of elements. O(N) operations on O(N) number of elements => leading to O(N^2)
// O(1) space complexity

console.log(bubbleSort([3, 6, 9, 7, 1, 0])) // should return [0,1,3,6,7,9]
