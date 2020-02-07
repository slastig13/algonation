function smallestDifference(arrayOne, arrayTwo) {
  arrayOne.sort((a, b) => a - b)
  arrayTwo.sort((a, b) => a - b)

  let result = []
  let prevDiff = Infinity
  let left = 0
  let right = 0

  while (left < arrayOne.length && right < arrayTwo.length) {
    let currDiff = Math.abs(arrayOne[left] - arrayTwo[right])
    if (currDiff === 0) return [arrayOne[left], arrayTwo[right]]
    if (currDiff < prevDiff) {
      result = [arrayOne[left], arrayTwo[right]]
      prevDiff = currDiff
    }
    if (arrayOne[left] < arrayTwo[right]) left++
    else right++
  }
  return result
}

// O(NlogN + MlogM) time complexity where N is length of arrayOne and M is length of arrayTwo
// O(1) space complexity

console.log(smallestDifference([9, 10, 5, 8, -6, 100], [-5, 100, 200])) // return [100,100]
console.log(smallestDifference([9, 10, 5, 8, -6, 100], [-5, 500, 200])) // return [-6,-5]
