"use strict";

const { LinkedList, Node, zip } = require("./linked-list-zip.js");

describe("Testing Linked List", () => {
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

  const list3 = new LinkedList();
  list3.head = new Node(10);
  list3.head.next = new Node(20);
  list3.head.next.next = new Node(30);
  list3.head.next.next.next = new Node(40);
  list3.head.next.next.next.next = new Node(50);
  list3.head.next.next.next.next.next = new Node(60);

  const list4 = new LinkedList();
  list4.head = new Node(10);
  list4.head.next = new Node(20);

  it("Can merge two lists together of same size", () => {
    const newList = zip(list1, list2);

    expect(newList.toString()).toStrictEqual(
      "{ 5 } -> { 10 } -> { 15 } -> { 20 } -> { 25 } -> { 30 } -> { 35 } -> { 40 } -> NULL"
    );
  });

  it("Can merge two list where the first one is shorter than the second", () => {
    const newList = zip(list1, list3);

    expect(newList.toString()).toStrictEqual(
      "{ 5 } -> { 10 } -> { 15 } -> { 20 } -> { 25 } -> { 30 } -> { 35 } -> { 40 } -> { 50 } -> { 60 } -> NULL"
    );
  });

  it("Can merge two lists where the first is longer than the second", () => {
    const newList = zip(list1, list4);

    expect(newList.toString()).toStrictEqual(
      "{ 5 } -> { 10 } -> { 15 } -> { 20 } -> { 25 } -> { 35 } -> NULL"
    );
  });
});
