"use strict";

const { Animal, AnimalShelter } = require("./stack-queue-animal-shelter.js");

describe("Tesing the animal shelter", () => {
  const shelter = new AnimalShelter();

  it("Should be able to enqueue an animal to the shelter and dequeue it from the shelter", () => {
    shelter.enqueue(new Animal("dog"));
    const animal = shelter.dequeue("dog");

    expect(animal).toBe("dog");
  });
});
