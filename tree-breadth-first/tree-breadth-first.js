"use strict";

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  breadthFirst() {
    if (this.root) {
      const queue = [];
      const arrToReturn = [];
      queue.push(this.root);
      while (queue.length > 0) {
        const temp = queue.shift();
        arrToReturn.push(temp.value);
        if (temp.left) {
          queue.push(temp.left);
        }
        if (temp.right) {
          queue.push(temp.right);
        }
      }
      return arrToReturn;
    } else {
      throw new Error("No root value");
    }
  }

  adds(current, value) {
    if (!current) {
      current = new Node(value);
    }
    if (current.value > value) {
      if (!current.left) {
        current.left = new Node(value);
      } else {
        this.adds(current.left, value);
      }
    } else if (current.value < value) {
      if (!current.right) {
        current.right = new Node(value);
      } else {
        this.adds(current.right, value);
      }
    }
  }

  contains(value) {
    let doesContain = false;
    this.preOrder(this.root, value);
    return doesContain;
  }

  preOrder(current, value) {
    if (current.value === value) {
      doesContain = true;
    }
    if (current.left) {
      this.preOrder(current.left, value);
    }
    if (current.right) {
      this.preOrder(current.right, value);
    }
  }

  preOrder(current) {
    console.log(current.value);

    if (current.left) {
      this.preOrder(current.left);
    }
    if (current.right) {
      this.preOrder(current.right);
    }
  }

  inOrder(current) {
    if (current.left) {
      this.inOrder(current.left);
    }

    console.log(current.value);

    if (current.right) {
      this.inOrder(current.right);
    }
  }

  postOrder(current) {
    if (current.left) {
      this.postOrder(current.left);
    }

    if (current.right) {
      this.postOrder(current.right);
    }

    console.log(current.value);
  }
}

module.exports = {
  Node,
  BinaryTree,
};
