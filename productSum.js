// Prompt: write a function that takes in a multi-dimensional array and returns its product sum. The array is non-empty and contains integers or other arrays. The product sum of this array is the sum of its elements, where nested arrays should be summed themselves and then multiplied by their level of depth.

function productSum(array, multiplier = 1) {
  let sum = 0
  for (let i = 0; i < array.length; i++) {
    let element = array[i]
    if (Array.isArray(element)) {
      sum += productSum(element, multiplier + 1)
    } else {
      sum += element
    }
  }
  return sum * multiplier
}

console.log(productSum([5, 1, [7, -1], 3, [6, [-12, 8], 4]]))

// O(N) time complexity (including sub-array elements)
// O(D) space complexity where D is the largest depth of the multi-dimensional arrays
