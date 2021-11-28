"use strict";

const HashTable = require("../index");

describe("Testing HashTable", () => {
  it("Should be able to add a key/value pair to the hashtable", () => {
    const hashTable = new HashTable(1024);
    hashTable.add("Antoine", "Dev");

    expect(
      hashTable.map[hashTable.hash("Antoine")].head.value["Antoine"]
    ).toStrictEqual("Dev");
  });

  it("Should be able to retrieve a value based on a key", () => {
    const hashTable = new HashTable(1024);
    hashTable.add("Antoine", "Dev");

    expect(hashTable.get("Antoine")).toStrictEqual("Dev");
  });

  it("Should return null if a key does not exist in the hashtable", () => {
    const hashTable = new HashTable(1024);
    hashTable.add("Antoine", "Dev");

    expect(hashTable.get("Dev")).toStrictEqual(null);
  });

  it("Should be able to handle a collision in the hashtable", () => {
    const hashTable = new HashTable(1024);
    hashTable.add("Antoine", "Engineer");
    hashTable.add("Antoine", "Dev");

    expect(
      hashTable.map[hashTable.hash("Antoine")].head.next.value
    ).toStrictEqual({ Antoine: "Dev" });
  });

  it("Should be able to retrieve a value from a bucket within the hashtable that has a collision", () => {
    const hashTable = new HashTable(1024);
    hashTable.add("Antoine", "Engineer");
    hashTable.add("Antoine", "Dev");

    expect(
      hashTable.map[hashTable.hash("Antoine")].head.value["Antoine"]
    ).toStrictEqual("Engineer");
    expect(
      hashTable.map[hashTable.hash("Antoine")].head.next.value["Antoine"]
    ).toStrictEqual("Dev");
  });

  it("Should successfully hash a key to an in-range value", () => {
    const hashTable = new HashTable(1024);

    expect(hashTable.hash("Antoine")).toStrictEqual(569);
  });

  it("Should return boolean indicating whether key exists in the table", () => {
    const hashTable = new HashTable(1024);
    hashTable.add("Antoine", "Dev");

    expect(hashTable.contains("Antoine")).toStrictEqual(true);
    expect(hashTable.contains("Dev")).toStrictEqual(false);
  });
});
