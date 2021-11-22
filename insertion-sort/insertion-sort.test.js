"use strict";

const insertionSort = require("./insertion-sort.js");

describe("Testing the insertionSort function", () => {
  const one = [8, 4, 23, 42, 16, 15];
  const two = [20, 18, 12, 8, 5, -2];
  const three = [5, 12, 7, 5, 5, 7];
  const four = [2, 3, 5, 7, 13, 11];

  it("It should be able to go through an array and change sort the values", () => {
    const sortedOne = insertionSort(one);

    expect(sortedOne.toString()).toBe("4,8,15,16,23,42");
  });

  it("It should be able to sort an array of reversed values", () => {
    const sortedTwo = insertionSort(two);

    expect(sortedTwo.toString()).toBe("-2,5,8,12,18,20");
  });

  it("It should be able to sort an array with multiple same values", () => {
    const sortedThree = insertionSort(three);

    expect(sortedThree.toString()).toBe("5,5,5,7,7,12");
  });

  it("It should be able to sort an array that is mostly sorted", () => {
    const sortedFour = insertionSort(four);

    expect(sortedFour.toString()).toBe("2,3,5,7,11,13");
  });
});
