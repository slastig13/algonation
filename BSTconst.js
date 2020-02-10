// Prompt: write a Binary Search Tree class. The class should have a "value" property set to be an integer, as well as "left" and "right" properties, both of which should point to either the None (null) value or to another BST. The BST class should support insertion, searching, and removal of values. The removal method should only remove the first instance of the target value.

class BST {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }

  insert(value) {
    let newNode = new BST(value)
    let currNode = this

    while (currNode) {
      if (newNode.value < currNode.value) {
        if (currNode.left) currNode = currNode.left
        else {
          currNode.left = newNode
          break
        }
      } else {
        if (currNode.right) currNode = currNode.right
        else {
          currNode.right = newNode
          break
        }
      }
    }
    return this
  }

  contains(value) {
    let currNode = this
    while (currNode) {
      if (currNode.value === value) return true
      else {
        if (currNode.value > value) {
          if (currNode.left) currNode = currNode.left
          else break
        } else {
          if (currNode.right) currNode = currNode.right
          else break
        }
      }
    }
    return false
  }

  remove(value, parent = null) {
    if (value < this.value) {
      if (this.left) {
        this.left.remove(value, this)
      }
    } else if (value > this.value) {
      if (this.right) {
        this.right.remove(value, this)
      }
    } else {
      if (!this.left && !this.right) {
        if (this.value < parent.value) parent.left = null
        else parent.right = null
      } else if (this.left && this.right) {
        this.value = this.right.getMinValue()
        this.right.remove(this.value, this)
      } else if (parent === null) {
        if (this.left) {
          this.value = this.left.value
          this.right = this.left.right
          this.left = this.left.left
        } else if (this.right) {
          this.value = this.right.value
          this.left = this.right.left
          this.right = this.right.right
        } else {
          this.value = null
        }
      } else if (parent.left === this) {
        parent.left = this.left !== null ? this.left : this.right
      } else if (parent.right === this) {
        parent.right = this.left !== null ? this.left : this.right
      }
    }
    return this
  }

  getMinValue() {
    if (this.left === null) {
      return this.value
    } else {
      return this.left.getMinValue()
    }
  }
}

// avg case: O(logN) time complexity
// avg case: O(logN) space complexity
// worst case: O(N) time complexity
// worst case: O(N) space complexity
