// Prompt: You are given a Binary Tree data structure consisting of Binary Tree nodes. Each Binary Tree node has an integer value stored in a property called "value" and two children nodes stored in properties called "left" and "right," respectively. Children nodes can either be Binary Tree nodes themselves or the None (null) value. Write a function that returns a boolean representing whether or not the Binary Tree is a valid BST. A node is said to be a BST node if and only if it satisfies the BST property: its value is strictly greater than the values of every node to its left; its value is less than or equal to the values of every node to its right; and both of its children nodes are either BST nodes themselves or None (null) values.

function validateBst(tree, min = -Infinity, max = Infinity) {
  if (tree === null) return true
  if (tree.value >= min && tree.value < max) {
    let left = validateBst(tree.left, min, tree.value)
    let right = validateBst(tree.right, tree.value, max)
    return left && right
  } else return false
}

// O(N) time complexity where N is the number of nodes in the tree
// O(D) space complexity where D is the depth of the tree
