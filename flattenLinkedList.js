// Prompt: You are given a doubly linked list which in addition to the next and previous pointers, it could have a child pointer, which may or may not point to a separate doubly linked list. These child lists may have one or more children of their own, and so on, to produce a multilevel data structure, as shown in the example below. Flatten the list so that all the nodes appear in a single-level, doubly linked list. You are given the head of the first level of the list.

const flatten = head => {
  if (!head) return null
  let node = head

  while (node.next) {
    if (node.child) {
      let next = node.next
      node.next = flatten(node.child)
      let childTail = findTail(node.child)
      childTail.next = next
      node.child.prev = node
      next.prev = childTail
      node.child = null
    }
    node = node.next
  }
  return head
}

function findTail(head) {
  let tail = head
  while (tail.next) {
    tail = tail.next
  }
  return tail
}

// finish this, edge cases!
