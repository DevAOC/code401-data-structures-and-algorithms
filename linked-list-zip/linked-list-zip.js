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

  appendNode(node, current) {
    if (node === null) {
      return;
    }
    if (current.next === null) {
      current.next = node;
    } else {
      this.appendNode(node, current.next);
    }
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

  kthFromEnd(k) {
    if (k >= 0) {
      let current = this.head;
      let nodeCounter = 0;
      const tempArr = [];
      while (current) {
        tempArr[nodeCounter] = current.value;
        current = current.next;
        nodeCounter++;
      }
      if (tempArr.length - 1 - k > 0) {
        return tempArr[tempArr.length - 1 - k];
      } else {
        return `Invalid input`;
      }
    } else {
      return `Invalid input`;
    }
  }
}
const zip = (l1, l2) => {
  if (l1 && l2) {
    const l3 = new LinkedList();
    let list1Current = l1.head;
    let list2Current = l2.head;
    l3.head = new Node();
    let newList = l3.head;
    while (list1Current || list2Current) {
      if (list1Current) {
        newList.value = list1Current.value;
        list1Current = list1Current.next;
        if (list1Current || list2Current) {
          newList.next = new Node();
          newList = newList.next;
        }
      }
      if (list2Current) {
        newList.value = list2Current.value;
        list2Current = list2Current.next;
        if (list1Current || list2Current) {
          newList.next = new Node();
          newList = newList.next;
        }
      }
    }
    return l3;
  } else {
    return null;
  }
};

const list1 = new LinkedList();
list1.head = new Node(5);
list1.head.next = new Node(15);
list1.head.next.next = new Node(25);
list1.head.next.next.next = new Node(35);

const list2 = new LinkedList();
list2.head = new Node(10);
list2.head.next = new Node(20);
list2.head.next.next = new Node(30);
list2.head.next.next.next = new Node(40);

const newList = zip(list1, list2);
console.log(newList.toString());

module.exports = {
  Node,
  LinkedList,
  zip,
};
