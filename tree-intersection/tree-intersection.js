'use strict';

const { LinkedList } = require('../linked-list-insertions/linked-list-insertions.js');

class HashTable {
  constructor(size) {
    this.size = size;
    this.map = new Array(size);
  }

  hash(key) {
    let sum = 0;

    for (let i = 0; i < key.length; i++) {
      sum += key.charCodeAt(i);
    }
    return (sum * 599) % this.size;
  }

  add(value) {
    const index = this.hash(value.toString());
    const bucket = this.map[index];
    const payload = {
      [value.toString()]: value,
    };

    if (bucket) {
      bucket.append(payload);
    } else {
      const list = new LinkedList();
      list.append(payload);
      this.map[index] = list;
    }
  }

  contains(key) {
    const index = this.hash(key);
    const bucket = this.map[index];

    if (bucket) {
      return true;
    } else {
      return false;
    }
  }
}

const hashTree = (hashTable, current) => {
  hashTable.add(current.value);
  if (current.right) {
    hashTree(hashTable, current.right);
  }
  if (current.left) {
    hashTree(hashTable, current.left);
  }
};

const iterateTree = (commons, hashTable, current) => {
  if (hashTable.contains(current.value.toString())) {
    commons.push(current.value);
  }
  if (current.right) {
    iterateTree(commons, hashTable, current.right);
  }
  if (current.left) {
    iterateTree(commons, hashTable, current.left);
  }
};

const treeIntersection = (bt1, bt2) => {
  const commons = [];
  const hashTable = new HashTable(100);
  hashTree(hashTable, bt1);
  iterateTree(commons, hashTable, bt2);
  return commons;
};

module.exports = treeIntersection;
