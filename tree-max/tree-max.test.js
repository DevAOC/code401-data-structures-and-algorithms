"use strict";

const { Node, BinaryTree } = require("./tree-max.js");

describe("Testing the maximum value function", () => {
  it("Should return the highest number in the tree", () => {
    const tree = new BinaryTree();
    tree.root = new Node(10);
    tree.root.left = new Node(20);
    tree.root.right = new Node(15);
    tree.root.left.left = new Node(30);
    tree.root.left.right = new Node(40);
    tree.root.right.left = new Node(25);
    tree.root.right.right = new Node(35);

    const highest = tree.treeMax();
    expect(highest).toBe(40);
  });
});
