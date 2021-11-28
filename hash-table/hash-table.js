"use strict";

const LinkedList = require("../linked-list/linked-list.js");

module.exports = class HashTable {
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

  add(key, value) {
    const index = this.hash(key);
    const bucket = this.map[index];
    const payload = {
      [key]: value,
    };

    if (bucket) {
      bucket.append(payload);
    } else {
      const list = new LinkedList();
      list.append(payload);
      this.map[index] = list;
    }
  }

  get(key) {
    const index = this.hash(key);
    const bucket = this.map[index];

    if (bucket) {
      let current = bucket.head;
      while (current) {
        if (current.value[key]) {
          return current.value[key];
        }
        current = current.next;
      }
    } else {
      return null;
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
};
