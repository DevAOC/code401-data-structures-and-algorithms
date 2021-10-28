"use strict";

const { LinkedList, Node } = require("./linked-list-kth.js");

describe("Testing Linked List", () => {
  it("Should return an error where k is greater than the length of the linked list", () => {
    const list = new LinkedList();
    list.head = new Node(1);
    list.head.next = new Node(2);
    list.head.next.next = new Node(3);
    list.head.next.next.next = new Node(4);
    expect(list.kthFromEnd(5)).toBe(`Invalid input`);
  });

  it("Should return an error where k and the length of the list are the same", () => {
    const list = new LinkedList();
    list.head = new Node(1);
    list.head.next = new Node(2);
    list.head.next.next = new Node(3);
    list.head.next.next.next = new Node(4);
    expect(list.kthFromEnd(4)).toBe(`Invalid input`);
  });

  it("Should return an error where k is not a positive integer", () => {
    const list = new LinkedList();
    list.head = new Node(1);
    list.head.next = new Node(2);
    expect(list.kthFromEnd(-2)).toBe(`Invalid input`);
  });

  it("Should return a value where k is not at the end, but somewhere in the middle of the linked list", () => {
    const list = new LinkedList();
    list.head = new Node(1);
    list.head.next = new Node(2);
    list.head.next.next = new Node(3);
    list.head.next.next.next = new Node(4);
    expect(list.kthFromEnd(2)).toBe(2);
  });
});
