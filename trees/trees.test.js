"use strict";

const { Node, BinaryTree } = require("./trees.js");

const tree = new BinaryTree();

tree.root = new Node("10");
tree.root.left = new Node("13");
tree.root.left.left = new Node("23");
tree.root.left.left.left = new Node("25");
tree.root.left.left.right = new Node("50");
tree.root.right = new Node("2");
tree.root.right.right = new Node("45");
tree.root.right.right.left = new Node("3");
tree.root.right.right.left.right = new Node("7");

describe("Testing trees class", () => {
  it("Can successfully instantiate an empty tree", () => {
    const tree = new BinaryTree();

    expect(tree.root).toBe(null);
  });

  it("Can successfully instantiate a tree with a root node", () => {
    const tree = new BinaryTree();
    tree.root = new Node(10);

    expect(tree.root.value).toBe(10);
  });

  it("Can successfully instantiate a tree with a root and a left and right child", () => {
    const tree = new BinaryTree();
    tree.root = new Node(10);
    tree.root.left = new Node(40);
    tree.root.right = new Node(3);

    expect(tree.root.left.value).toBe(40);
    expect(tree.root.right.value).toBe(3);
  });

  // it("Can successfully return a collection from a", () => {
  //   const queue = new StackQueuePseudo();
  //   queue.enqueue(2);
  //   queue.enqueue(3);
  //   queue.enqueue(4);
  //   queue.dequeue();
  //   queue.dequeue();
  //   queue.dequeue();
  //   expect(queue.front).toStrictEqual(null);
  //   expect(queue.back).toStrictEqual(null);
  // });
});
