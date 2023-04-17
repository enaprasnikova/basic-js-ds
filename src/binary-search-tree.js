const {NotImplementedError} = require('../extensions/index.js');

const {Node} = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  rootNode = null;

  root() {
    return this.rootNode;
  }

  add(data) {
    if (this.rootNode === null) {
      this.rootNode = new Node(data);
    } else if (data > this.rootNode.data && this.rootNode.right === null) {
      this.rootNode.right = new Node(data);
    } else if (data < this.rootNode.data && this.rootNode.left === null) {
      this.rootNode.left = new Node(data);
    } else {
      let head = data < this.rootNode.data ? this.rootNode.left : this.rootNode.right;
      while (head !== null) {
        if (data > head.data && head.right === null) {
          head.right = new Node(data);
        } else if (data < head.data && head.left === null) {
          head.left = new Node(data);
        } else {
          head = data < head.data ? head.left : head.right;
        }
      }
    }
  }

  has(data) {
    let head = this.rootNode;
    while (head !== null) {
      if (head.data === data) {
        return true;
      } else if (head.data < data) {
        head = head.right;
      } else if (head.data > data) {
        head = head.left;
      }
    }
    return false;
  }

  find(data) {
    let head = this.rootNode;
    while (head !== null) {
      if (head.data === data) {
        return head;
      } else if (head.data < data) {
        head = head.right;
      } else if (head.data > data) {
        head = head.left;
      }
    }
    return null;
  }

  remove(data) {
    this.rootNode = this.removeNode(this.rootNode, data);
  }

  removeNode(node, data) {
    if (node === null) {
      return null;
    }
    if (node.data === data) {
      if (!node.left && !node.right) {
        node = null;
        return node;
      } else if (node.right && !node.left) {
        return node.right;
      } else if (!node.right && node.left) {
        return node.left;
      } else {
        let temp = this.findMinNode(node.right);
        node.data = temp.data;
        node.right = this.removeNode(node.right, temp.data);
        return node;
      }

    } else if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    } else if (data > node.data) {
      node.right = this.removeNode(node.right, data);
      return node;
    }
  }

  findMinNode(node) {
    let head = node;
    while (head.left !== null) {
      head = head.left
    }

    return head;
  }

  min() {
    let head = this.rootNode;
    if (head === null) {
      return null;
    }
    while (head.left !== null) {
      head = head.left;
    }

    return head.data;
  }

  max() {
    let head = this.rootNode;
    if (head === null) {
      return null;
    }
    while (head.right !== null) {
      head = head.right;
    }

    return head.data;
  }
}

module.exports = {
  BinarySearchTree
};