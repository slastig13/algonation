// You are given an array of integers and an integer. Write a function that moves all instances of that integer in the array to the end of the array. The function should perform this in place and does not need to maintain the order of the other integers.

function moveElementToEnd(array, toMove) {
  let left = 0,
    right = array.length - 1
  while (left < right) {
    if (array[left] === toMove && array[right] !== toMove) {
      swap(left, right, array)
      left++
      right--
    } else if (array[right] === toMove) right--
    else left++
  }
  return array
}

function swap(left, right, array) {
  let temp = array[left]
  array[left] = array[right]
  array[right] = temp
}

// O(N) time complexity where N is the length of the array
// O(1) space complexity

console.log(moveElementToEnd([2, 1, 2, 2, 2, 4, 5, 2], 2))
