"use strict";

const { Node, BinaryTree } = require("./tree-breadth-first.js");

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

describe("Testing breadth-first tree traversal", () => {
  it("Can successfully traverse and return an array with breadth-first traversal", () => {
    const arr = tree.breadthFirst();

    expect(arr.toString()).toBe("10,13,2,23,45,25,50,3,7");
  });
});
