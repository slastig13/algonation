// Given a linked list, swap every two adjacent nodes and return its head. You may not modify the values in the list's nodes, only nodes itself may be changed.

function swapPairs(head) {
  if (head === null || head.next === null) return head

  let prevNode = null
  let node = head
  let returnNode = head.next

  while (node !== null && node.next !== null) {
    let temp = node
    node = node.next
    temp.next = node.next
    node.next = temp
    if (prevNode) prevNode.next = node
    prevNode = temp
    node = temp.next
  }
  return returnNode
}

// O(N) time complexity
// O(1) space complexity
