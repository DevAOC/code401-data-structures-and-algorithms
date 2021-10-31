"use strict";

const { Node, Stack, Queue } = require("./stack-and-queue.js");

describe("Testing the Stack and Queue class", () => {
  const stack = new Stack();
  const queue = new Queue();

  it("Can push a new node to the top of the stack", () => {
    stack.push(70);

    expect(stack.top.value).toStrictEqual(70);
  });

  it("Can pop a node from the top of the stack", () => {
    stack.pop();

    expect(stack.top).toStrictEqual(null);
  });

  it("Can peek into the stack and get a value from the top of the stack", () => {
    stack.push(60);
    const returned = stack.peek();

    expect(returned).toStrictEqual(60);
  });

  it("Can enqueue a new node to the back of the queue", () => {
    queue.enqueue(40);

    expect(queue.front.value).toStrictEqual(40);
  });

  it("Can dequeue a node from the front of the queue", () => {
    queue.dequeue();

    expect(queue.front).toStrictEqual(null);
  });

  it("Can peek into the queue and get a value from the front of the queue", () => {
    queue.enqueue(50);
    const returned = queue.peek();

    expect(returned).toStrictEqual(50);
  });
});
