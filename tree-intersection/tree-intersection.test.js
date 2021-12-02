'use strict';

const { BinaryTree, Node } = require('../trees/trees.js');
const treeIntersection = require('./tree-intersection.js');

describe('Testing tree-intersection function', () => {
  it('Should be able to check what values are in common and return them', () => {
    const tree1 = new BinaryTree();
    tree1.root = new Node(150);
    tree1.root.left = new Node(100);
    tree1.root.left.left = new Node(75);
    tree1.root.left.right = new Node(160);
    tree1.root.left.right.left = new Node(125);
    tree1.root.left.right.right = new Node(175);
    tree1.root.right = new Node(250);
    tree1.root.right.left = new Node(200);
    tree1.root.right.right = new Node(350);
    tree1.root.right.right.left = new Node(300);
    tree1.root.right.right.right = new Node(500);

    const tree2 = new BinaryTree();
    tree2.root = new Node(42);
    tree2.root.left = new Node(100);
    tree2.root.left.left = new Node(15);
    tree2.root.left.right = new Node(160);
    tree2.root.left.right.left = new Node(125);
    tree2.root.left.right.right = new Node(175);
    tree2.root.right = new Node(600);
    tree2.root.right.left = new Node(200);
    tree2.root.right.right = new Node(350);
    tree2.root.right.right.left = new Node(4);
    tree2.root.right.right.right = new Node(500);

    const result = treeIntersection(tree1.root, tree2.root);

    expect(result.toString()).toBe('600,350,500,4,200,100,160,175,125');
  });
});
