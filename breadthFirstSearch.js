// Prompt: You are given a Node class that has a name and an array of optional children Nodes. When put together, Nodes form a simple tree-like structure. Implement the breadthFirstSearch method on the Node class, which takes in an empty array, traverses the tree using the Breadth-first Search approach (specifically navigating the tree from left to right), stores all of the Nodes' names in the input array, and returns it.

class Node {
  constructor(name) {
    this.name = name
    this.children = []
  }

  addChild(name) {
    this.children.push(new Node(name))
    return this
  }

  breadthFirstSearch(array) {
    // CODE HERE:
    let queue = [this]

    while (queue.length > 0) {
      let current = queue.shift()

      array.push(current.name)
      if (current.children) {
        queue.push(...current.children)
      }
    }
    return array
  }
}

// O(v + e) time complexity
// O(v) space complexity
