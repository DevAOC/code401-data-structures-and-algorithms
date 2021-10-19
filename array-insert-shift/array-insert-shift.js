"use strict";

const insertShiftArray = (arr, element) => {
  for (let index = Math.floor(arr.length / 2); index < arr.length; index++) {
    const temp = arr[index];
    arr[index] = element;
    element = temp;
  }
  arr[arr.length] = element;
  return arr;
};

console.log(insertShiftArray([1, 2, 3, 4, 5], 6));
