// write a class for a doubly linked list. It should have "head" and "tail" properties. Each node will have a "value" property and "next" and "prev" properties. The class should support setting the head and tail, insertion, removal, and traversal. Search should return a booleen value, no other methods should return a value.

class Node {
  constructor(value) {
    this.value = value
    this.prev = null
    this.next = null
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }

  setHead(node) {
    if (!this.head) {
      this.head = node
      this.tail = node
    } else {
      this.head.prev = node
      node.next = this.head
      node.prev = null
      this.head = node
    }
  }

  setTail(node) {
    if (!this.tail) {
      this.setHead(node)
    } else {
      this.tail.next = node
      node.prev = this.tail
      node.next = null
      this.tail = node
    }
  }

  insertBefore(node, nodeToInsert) {
    if (node === this.head) this.setHead(nodeToInsert)
    else {
      node.prev.next = nodeToInsert
      nodeToInsert.prev = node.prev
      node.prev = nodeToInsert
      nodeToInsert.next = node
    }
  }

  insertAfter(node, nodeToInsert) {
    if (node === this.tail) this.setTail(nodeToInsert)
    else {
      node.next.prev = nodeToInsert
      nodeToInsert.next = node.next
      node.next = nodeToInsert
      nodeToInsert.prev = node
    }
  }

  insertAtPosition(position, nodeToInsert) {
    if (position === 0 || !this.head) this.setHead(nodeToInsert)
    else {
      let nodeToInsertBefore = this.traversal(position)
      if (nodeToInsertBefore === this.tail) this.setTail(nodeToInsert)
      else this.insertBefore(nodeToInsertBefore, nodeToInsert)
    }
  }
  // helper function for position
  traversal(position) {
    let node = this.head
    let counter = 0
    while (counter < position && node.next !== null) {
      node = node.next
      counter++
    }
    return node
  }

  removeNodesWithValue(value) {
    let node = this.head
    while (node) {
      let nodeToRemove = node // temp var
      node = node.next
      if (nodeToRemove.value === value) this.remove(nodeToRemove)
    }
  }

  remove(node) {
    if (node === this.head) this.head = this.head.next
    if (node === this.tail) this.tail = this.tail.prev
    this.removeNodeConnections(node)
  }

  containsNodeWithValue(value) {
    let pointer = this.head
    while (pointer) {
      if (pointer.value === value) return true
      else {
        pointer = pointer.next
      }
    }
    return false
  }

  // helper function for removal
  removeNodeConnections(node) {
    if (node.prev !== null) {
      node.prev.next = node.next
    }
    if (node.next !== null) {
      node.next.prev = node.prev
    }
    node.prev = null
    node.next = null
  }
}

// tests

let linkedList = new DoublyLinkedList()
let node = new Node(1)
let second = new Node(2)
let third = new Node(3)

linkedList.setHead(node)
linkedList.remove(node)
linkedList.setTail(node)
linkedList.removeNodesWithValue(1)
linkedList.insertAtPosition(3, node)
linkedList.remove(node)

linkedList.setHead(second)
linkedList.setTail(third)
linkedList.removeNodesWithValue(2)
linkedList.removeNodesWithValue(3)
linkedList.setHead(second)
linkedList.insertAfter(second, third)
linkedList.insertAtPosition(2, node)

console.log(linkedList)
