"use strict";

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    const newTop = new Node(value);
    const newNext = this.top;
    this.top = newTop;
    newTop.next = newNext;
  }

  pop() {
    if (this.top) {
      const newTop = this.top.next;
      const valueToReturn = this.top.value;
      this.top = newTop;
      return valueToReturn;
    } else {
      return new Error("Stack is empty");
    }
  }

  peek() {
    if (this.top) {
      return this.top.value;
    } else {
      return new Error("Stack is empty");
    }
  }

  isEmpty() {
    if (this.top) {
      return false;
    } else {
      return true;
    }
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.back = this.front;
  }

  enqueue(value) {
    if (this.front) {
      const newBack = new Node(value);
      this.back.next = newBack;
      this.back = newBack;
    } else {
      const newNode = new Node(value);
      this.front = newNode;
      this.back = newNode;
    }
  }

  dequeue() {
    if (this.front) {
      const newFront = this.front.next;
      const valueToReturn = this.front.value;
      this.front = newFront;
      return valueToReturn;
    } else {
      return new Error("Stack is empty");
    }
  }

  peek() {
    if (this.front) {
      return this.front.value;
    } else {
      return new Error("Stack is empty");
    }
  }

  isEmpty() {
    if (this.front) {
      return false;
    } else {
      return true;
    }
  }
}

module.exports = {
  Node,
  Stack,
  Queue,
};
