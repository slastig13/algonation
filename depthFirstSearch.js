// Prompt: You are given a Node class that has a name and an array of optional children Nodes. When put together, Nodes form a simple tree-like structure. Implement the depthFirstSearch method on the Node class, which takes in an empty array, traverses the tree using the Depth-first search approach (left to right), stores all of the Nodes' names in the input array, and returns it.

class Node {
  //given
  constructor(name) {
    this.name = name
    this.children = []
  }
  //given
  addChild(name) {
    this.children.push(new Node(name))
    return this
  }
  // write function:
  depthFirstSearch(array) {
    array.push(this.name)
    for (let i = 0; i < this.children.length; i++) {
      this.children[i].depthFirstSearch(array)
    }
    return array
  }
}
