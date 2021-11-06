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
