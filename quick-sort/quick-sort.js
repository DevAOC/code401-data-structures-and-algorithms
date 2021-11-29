'use strict';

const partition = (arr, start, end) => {
  const pivot = arr[end];
  let pivotIndex = start;
  for (let i = start; i < end; i++) {
    if (arr[i] <= pivot) {
      [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
      pivotIndex++;
    }
  }
  [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]];
  return pivotIndex;
};

const quickSort = (arr, start = 0, end = arr.length - 1) => {
  if (start >= end) {
    return;
  }
  const index = partition(arr, start, end);

  quickSort(arr, start, index - 1);
  quickSort(arr, index + 1, end);
};

module.exports = quickSort;
