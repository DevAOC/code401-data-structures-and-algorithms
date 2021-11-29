'use strict';

const quickSort = require('./quick-sort.js');

describe('Testing quick-sort function', () => {
  it('Can successfully sort a basic array', () => {
    const arr = [8, 4, 23, 42, 16, 15];
    quickSort(arr);

    expect(arr.toString()).toBe('4,8,15,16,23,42');
  });

  it('Can successfully sort a reversed array', () => {
    const arr = [20, 18, 12, 8, 5, -2];
    quickSort(arr);

    expect(arr.toString()).toBe('-2,5,8,12,18,20');
  });

  it('Can successfully sort an array with only a few unique values', () => {
    const arr = [5, 12, 7, 5, 5, 7];
    quickSort(arr);

    expect(arr.toString()).toBe('5,5,5,7,7,12');
  });

  it('Can successfully sort a nearly sorted array', () => {
    const arr = [2, 3, 5, 7, 13, 11];
    quickSort(arr);

    expect(arr.toString()).toBe('2,3,5,7,11,13');
  });
});
