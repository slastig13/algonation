// Write a function that takes in a Binary Tree and returns an array of its branch sums (ordered from leftmost branch sum to rightmost branch sum). A branch sum is the sum of all values in a Binary Tree branch. Each node has a value stored in a property called "value" and two children nodes stored in properties called "left" and "right". Children nodes can either be Binary Tree nodes themselves or the null value.

function branchSums(root, currSum = 0, result = []) {
  if (!root) return result
  currSum += root.value
  if (!root.left && !root.right) {
    result.push(currSum)
  } else {
    branchSums(root.left, currSum, result)
    branchSums(root.right, currSum, result)
  }
  return result
}

// O(N) time complexity where N is the total number of Nodes in the Binary Tree
// O(N) space complexity (leaf nodes ~1/2 N => N // bounded by O(N))
