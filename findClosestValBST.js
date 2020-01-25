// Prompt: You are given a BST consisting of BST nodes. Each BST node has an integer value stored in a property called "value" and two children nodes stored in properties called "left" and "right". You are also given a target integer value. Write a function that finds the closest value to that target value contained in the BST. Assume that there will only be one closest value.

function findClosestValueInBst(tree, target) {
  let currNode = tree
  let bestCase = {diff: Infinity, value: null}

  while (currNode) {
    let currDiff = Math.abs(target - currNode.value)
    if (currDiff === 0) return currNode.value
    if (target >= currNode.value && currNode.right) {
      if (currDiff < bestCase.diff) {
        bestCase.diff = currDiff
        bestCase.value = currNode.value
      }
      currNode = currNode.right
    } else {
      if (currDiff < bestCase.diff) {
        bestCase.diff = currDiff
        bestCase.value = currNode.value
      }
      currNode = currNode.left
    }
  }
  return bestCase.value
}
