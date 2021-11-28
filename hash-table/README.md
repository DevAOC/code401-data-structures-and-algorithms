# Hash Table

## Problem Domain

In this code challenge we are tasked with making a hash table class that has a add, get, contains, and hash method. The add method adds a hash to the hash table. The get method gets a hash from the hash table. The contains method, checks if a hash is in the hash table. The hash method hashes an input.

## Inputs / Outputs

### Add Method

- Input: key, value
- Output: none

### Get Method

- Input: key
- Output: Value associated with that key in the table

### Contains Method

- Input: key
- Output: Boolean, indicating if the key exists in the table already.

### Hash Method

- Input: key
- Output: Index in the collection for that key

## Algorithms

### Add Method

- Hash the key to get the index position in the hashtable
- Look at that bucket's value for the given index
- If a key-value pair is present we can assume it's a linked list and append
- If no key-value pair is present, instantiate a new Linked list and insert the linked list into the hash table at the correct index

### Get Method

- Hash the key to get the index position in the hashtable
- Look at that bucket's value for the given index
- If the bucket holds a value, traverse the linked list within the bucket to find the matching key and return that value
- If a value associated with that key does not exist in the table, return null

### Contains Method

- Hash the key to get the index position in the hashtable
- Look at that bucket's value for the given index
- If the bucket at that hashed key holds a value, return true
- If the bucket does not exist, return false (the key does not exist in the table)

### Hash Method

- Add all the ASCII values of the key together
- Multiply sum by a prime number (599)
- Get the remainder when sum is divided by the total size of the array
- Insert key-value pair into the array at that index
