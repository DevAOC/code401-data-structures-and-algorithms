'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  traverse(current) {
    if (current) {
      console.log(current);
      traverse(current.next);
    }
  }

  insert(value) {
    const newHead = new Node(value);
    const newNext = this.head;
    this.head = newHead;
    newHead.next = newNext;
  }

  includes(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  toString() {
    let current = this.head;
    let string = '';
    while (current) {
      string += `{ ${current.value} } -> `;
      current = current.next;
    }
    return (string += 'NULL');
  }

  append(value) {
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = new Node(value);
  }

  insertBefore(value, newValue) {
    let current = this.head;
    const newNode = new Node(newValue);
    while (current) {
      if (this.head.value === value) {
        newNode.next = this.head;
        this.head = newNode;
        return;
      } else if (current.next.value === value) {
        newNode.next = current.next;
        current.next = newNode;
        return;
      }
      current = current.next;
    }
  }

  insertAfter(value, newValue) {
    let current = this.head;
    const newNode = new Node(newValue);
    while (current) {
      if (current.value === value) {
        newNode.next = current.next;
        current.next = newNode;
      }
      current = current.next;
    }
  }
}

module.exports = {
  Node,
  LinkedList,
};
