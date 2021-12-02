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

    expect(result.slice(33, 86)).toBe('Most frequently used words: [very: 5][is: 4][this: 2]');
  });
  it('Should return a string that shows the count of every word in the book', () => {
    const result = hashmapRepeatedWord(book2);

    expect(result.slice(87)).toBe(
      'Counts: [this: 2][is: 4][my: 1][book: 2][it: 2][very: 5][awesome: 2][i: 1][lied: 1][not: 1][garbage: 1][: 1]'
    );
  });
});
