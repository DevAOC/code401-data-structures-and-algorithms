"use strict";

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

  insert(newHead) {
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
    let string = "";
    while (current) {
      string += `{ ${current.value} } -> `;
      current = current.next;
    }
    return (string += "NULL");
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

const list = new LinkedList();
list.head = new Node(10);
list.head.next = new Node(20);
list.head.next.next = new Node(40);
list.head.next.next.next = new Node(80);

list.insert(new Node(5));
console.log(list); // Why does this not show me the whole linked list?????
const includes = list.includes(10);
console.log(includes);

console.log(list.toString());

list.append(160);
console.log(list.toString());

list.insertBefore(20, 15);
console.log(list.toString());

list.insertAfter(20, 30);
console.log(list.toString());
