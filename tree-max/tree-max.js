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

  treeMax() {
    if (!this.root) {
      throw new Error("No root");
    }
    let highest = null;
    this.findMax(this.root);
    return highest;
  }

  findMax(current) {
    if (current.value > this.tempMax) {
      highest = current.value;
    }

    if (current.left) {
      this.findMax(current.left);
    }

    if (current.right) {
      this.findMax(current.right);
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

  postOrder(current, highest) {
    if (!current) {
      throw new Error("No value");
    }

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
