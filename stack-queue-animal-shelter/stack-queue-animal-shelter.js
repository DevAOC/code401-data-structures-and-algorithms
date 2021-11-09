"use strict";

const { Queue } = require("../stack-and-queue.js");

class Animal {
  constructor(type) {
    type;
  }
}

class AnimalShelter {
  constructor() {
    this.cats = new Queue();
    this.dogs = new Queue();
  }

  enqueue(animal) {
    if (animal.type === "dog") {
      this.dogs.enqueue(animal);
    } else if (animal.type === "cat") {
      this.cats.enqueue(animal);
    } else {
      throw new Error("Invalid input");
    }
  }

  dequeue(pref) {
    if (pref === "dog") {
      return this.dogs.dequeue(pref);
    } else if (pref === "cat") {
      return this.cats.dequeue(pref);
    } else {
      return null;
    }
  }
}

module.exports = {
  Animal,
  AnimalShelter,
};
