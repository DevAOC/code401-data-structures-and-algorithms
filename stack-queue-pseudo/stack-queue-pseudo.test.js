"use strict";

// Require our stack class
const StackQueuePseudo = require("../stack-queue-pseudo/stack-queue-pseudo.js");

describe("Testing StackQueuePseudo", () => {
  it("Can successfully enqueue one node into a queue", () => {
    const queue = new StackQueuePseudo();
    queue.enqueue(2);
    expect(queue.front.value).toBe(2);
    expect(queue.back.value).toBe(2);
  });

  it("Can successfully enqueue multiple nodes into a queue", () => {
    const queue = new StackQueuePseudo();
    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);
    expect(queue.front.value).toBe(2);
    expect(queue.back.value).toBe(4);
  });

  it("Can successfully dequeue out of a queue the expected value", () => {
    const queue = new StackQueuePseudo();
    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);
    expect(queue.dequeue()).toStrictEqual(2);
  });

  it("Can successfully empty a queue after multiple dequeues", () => {
    const queue = new StackQueuePseudo();
    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);
    queue.dequeue();
    queue.dequeue();
    queue.dequeue();
    expect(queue.front).toStrictEqual(null);
    expect(queue.back).toStrictEqual(null);
  });

  it("Can successfully instantiate an empty queue", () => {
    const queue = new StackQueuePseudo();
    expect(queue.front).toStrictEqual(null);
    expect(queue.back).toStrictEqual(null);
  });

  it("Calling dequeue on empty queue raises exception", () => {
    const queue = new StackQueuePseudo();
    expect(queue.dequeue()).toStrictEqual("Invalid operation");
  });
});
