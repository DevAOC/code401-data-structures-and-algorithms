"use strict";

class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
}

class kAryTree {
  constructor() {
    this.root = null;
  }

  fizzBuzz() {
    if (this.root) {
      const queue = [];
      queue.push(this.root);

      while (queue.length > 0) {
        const parent = queue.shift();
        parent.value = this.checkFizzBuzz(parent.value);

        for (const child in parent.children) {
          queue.push(child);
        }
      }
    } else {
      return "No root";
    }
  }

  checkFizzBuzz(value) {
    if (value % 15 === 0) {
      return "FizzBuzz";
    } else if (value % 3 === 0) {
      return "Fizz";
    } else if (value % 5 === 0) {
      return "Buzz";
    }
    return value.toString();
  }
}
module.exports = {
  Node,
  kAryTree,
};
