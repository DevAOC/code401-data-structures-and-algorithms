"use strict";

const { Node, kAryTree } = require("./tree-fizz-buzz.js");

describe("Testing kAryTree class", () => {
  it("works properly if the value is divisible by 3: replaces the value with “Fizz”", () => {
    const tree = new kAryTree();
    tree.root = new Node(10);
    tree.root.children.push(new Node(9));
    tree.root.children.push(new Node(3));
    tree.root.children.push(new Node(45));
    tree.root.children[0].children.push(new Node(5));
    tree.root.children[0].children.push(new Node(30));
    tree.root.children[1].children.push(new Node(12));
    tree.root.children[1].children.push(new Node(18));
    tree.root.children[2].children.push(new Node(99));
    tree.root.children[2].children.push(new Node(150));
    tree.root.children[2].children.push(new Node(22));

    tree.fizzBuzz();

    expect(tree.root.value).not.toBe("Fizz");
    expect(tree.root.children[0].children[0].value).not.toBe("Fizz");

    expect(tree.root.children[2].children[0].value).toBe("Fizz");
    expect(tree.root.children[1].children[1].value).toBe("Fizz");
  });

  it("works properly if the value is divisible by 5: replaces the value with “Buzz”", () => {
    const tree = new kAryTree();
    tree.root = new Node(10);
    tree.root.children.push(new Node(9));
    tree.root.children.push(new Node(3));
    tree.root.children.push(new Node(45));
    tree.root.children[0].children.push(new Node(5));
    tree.root.children[0].children.push(new Node(30));
    tree.root.children[1].children.push(new Node(12));
    tree.root.children[1].children.push(new Node(18));
    tree.root.children[2].children.push(new Node(99));
    tree.root.children[2].children.push(new Node(150));
    tree.root.children[2].children.push(new Node(22));

    tree.fizzBuzz();

    expect(tree.root.value).toBe("Buzz");
    expect(tree.root.children[0].children[0].value).toBe("Buzz");

    expect(tree.root.children[1].children[0].value).not.toBe("Buzz");
    expect(tree.root.children[1].children[1].value).not.toBe("Buzz");
  });

  it("works properly if the value is divisible by 3 and 5: replaces the value with “FizzBuzz”", () => {
    const tree = new kAryTree();
    tree.root = new Node(10);
    tree.root.children.push(new Node(9));
    tree.root.children.push(new Node(3));
    tree.root.children.push(new Node(45));
    tree.root.children[0].children.push(new Node(5));
    tree.root.children[0].children.push(new Node(30));
    tree.root.children[1].children.push(new Node(12));
    tree.root.children[1].children.push(new Node(18));
    tree.root.children[2].children.push(new Node(99));
    tree.root.children[2].children.push(new Node(150));
    tree.root.children[2].children.push(new Node(22));

    tree.fizzBuzz();

    expect(tree.root.children[2].children[1].value).toBe("FizzBuzz");
    expect(tree.root.children[0].children[1].value).toBe("FizzBuzz");

    expect(tree.root.children[1].children[0].value).not.toBe("FizzBuzz");
    expect(tree.root.children[1].children[1].value).not.toBe("FizzBuzz");
  });

  it("works properly if the value is not divisible by 3 or 5: simply turns the number into a String.", () => {
    const tree = new kAryTree();
    tree.root = new Node(10);
    tree.root.children.push(new Node(9));
    tree.root.children.push(new Node(3));
    tree.root.children.push(new Node(45));
    tree.root.children[0].children.push(new Node(5));
    tree.root.children[0].children.push(new Node(30));
    tree.root.children[0].children.push(new Node(7));
    tree.root.children[1].children.push(new Node(12));
    tree.root.children[1].children.push(new Node(18));
    tree.root.children[2].children.push(new Node(99));
    tree.root.children[2].children.push(new Node(150));
    tree.root.children[2].children.push(new Node(22));

    tree.fizzBuzz();

    expect(tree.root.children[0].children[2].value).toBe("7");
    expect(tree.root.children[2].children[2].value).toBe("22");

    expect(tree.root.children[1].children[0].value).not.toBe("12");
    expect(tree.root.children[2].children[0].value).not.toBe("99");
  });

  it("Can handle an empty tree", () => {
    const tree = new kAryTree();

    const result = tree.fizzBuzz();

    expect(tree.root).toBeNull();
    expect(result).toBe("No root");
  });
});
