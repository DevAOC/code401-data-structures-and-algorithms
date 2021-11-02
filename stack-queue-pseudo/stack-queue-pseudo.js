"use strict";

const { Stack } = require("../stack-and-queue/stack-and-queue.js");

class StackQueuePseudo {
  constructor() {
    this.front = null;
    this.back = null;
    this.s1 = new Stack();
    this.s2 = new Stack();
  }

  enqueue(value) {
    while (this.s1.top) {
      let top = this.s1.top.value;
      this.s1.pop();
      this.s2.push(top);
    }
    this.s1.push(value);
    this.back = this.s1.top;
    while (this.s2.top) {
      let top = this.s2.top.value;
      this.s2.pop();
      this.s1.push(top);
    }
    this.front = this.s1.top;
  }

  dequeue() {
    if (!this.front) {
      return "Invalid operation";
    } else if (this.front === this.back) {
      this.back = null;
    }
    this.front = this.s1.top.next;
    return this.s1.pop();
  }
}

module.exports = StackQueuePseudo;
