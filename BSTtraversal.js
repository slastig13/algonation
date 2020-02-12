// Prompt: You are given a BST data structure consisting of BST nodes. Each BST node has an integer value stored in a property called "value" and two children nodes stored in properties called "left" and "right," respectively. A node is said to be a BST node if and only if it satisfies the BST property: its value is strictly greater than the values of every node to its left; its value is less than or equal to the values of every node to its right; and both of its children nodes are either BST nodes themselves or None (null) values. Write three functions that take in an empty array, traverse the BST, add its nodes' values to the input array, and return that array. The three functions should traverse the BST using the in-order traversal, pre-order traversal, and post-order traversal techniques, respectively.

function inOrderTraverse(tree, array) {
  if (tree.left) inOrderTraverse(tree.left, array)
  array.push(tree.value)
  if (tree.right) inOrderTraverse(tree.right, array)
  return array
}

function preOrderTraverse(tree, array) {
  array.push(tree.value)
  if (tree.left) preOrderTraverse(tree.left, array)
  if (tree.right) preOrderTraverse(tree.right, array)
  return array
}

function postOrderTraverse(tree, array) {
  if (tree.left) postOrderTraverse(tree.left, array)
  if (tree.right) postOrderTraverse(tree.right, array)
  array.push(tree.value)
  return array
}

// all: O(N) time complexity where N is the number of nodes in the tree
// all: O(N) space complexity where N is the number of nodes in the tree
