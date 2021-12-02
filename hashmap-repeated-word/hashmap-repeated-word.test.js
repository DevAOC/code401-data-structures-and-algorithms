const hashmapRepeatedWord = require('./hashmap-repeated-word.js');

describe('Tests hashmap-repeated-word', () => {
  const book1 = 'This is my book. My books is so awesome.';
  const book2 =
    'This is my book. It is very, very, very, very, very, awesome. I lied, this book is not awesome. It is garbage.';

  it('Should return a string that shows the first repeated word', () => {
    const result = hashmapRepeatedWord(book1);

    expect(result.slice(0, 32)).toBe('The first duplicated word is: my');
  });
  it('Should return a string that shows the most frequently used words', () => {
    const result = hashmapRepeatedWord(book2);

    expect(result.slice(33, 107)).toBe('Most frequently used words: [very: count: 5][is: count: 4][this: count: 2]');
  });
  it('Should return a string that shows the count of every word in the book', () => {
    const result = hashmapRepeatedWord(book2);

    expect(result.slice(108)).toBe(
      'All words and their counts: [this: count: 2][is: count: 4][my: count: 1][book: count: 2][it: count: 2][very: count: 5][awesome: count: 2][i: count: 1][lied: count: 1][not: count: 1][garbage: count: 1][: count: 1]'
    );
  });
});
