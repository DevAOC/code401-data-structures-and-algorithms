"use strict";

const merge = (left, right, arr) => {
  let i = 0;
  let j = 0;
  let k = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      arr[k] = left[i];
      i = i + 1;
    } else {
      arr[k] = right[j];
      j = j + 1;
    }
    k = k + 1;
  }

  if (i === left.length) {
    while (k < arr.length) {
      arr[k] = right[j];
      j = j + 1;
      k = k + 1;
    }
  } else {
    while (k < arr.length) {
      arr[k] = left[i];
      i = i + 1;
      k = k + 1;
    }
  }
};

const mergeSort = (arr) => {
  const n = arr.length;

  if (n > 1) {
    const mid = Math.floor(n / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    mergeSort(left);
    mergeSort(right);

    merge(left, right, arr);
  }
  return arr;
};

module.exports = mergeSort;
