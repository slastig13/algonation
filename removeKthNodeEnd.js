// Prompt: Write a function that takes in the head of a Singly Linked List and an integer k (assume that the list has at least k nodes). The function should remove the kth node from the end of the list. Note that every node in the Singly Linked List has a "value" property storing its value as well as a "next" property pointing to the next node in the list or None (null) if it is the tail of the list.

// Input given:
class LinkedList {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

// Code below:
function removeKthNodeFromEnd(head, k) {
  let first = head,
    second = head,
    counter = 0,
    prev = null

  while (counter < k) {
    second = second.next
    counter++
  }

  if (second === null) {
    head.value = head.next.value
    head.next = head.next.next
    return
  }

  while (second) {
    prev = first
    first = first.next
    second = second.next
  }

  prev.next = first.next
  first.next = null
  return head
}

// O(N) time complexity where N is the length of the linked list
// O(1) space complexity
