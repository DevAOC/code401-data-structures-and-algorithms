const repeatedWords = (str) => {
  const words = str.split(/[ ,.]+/);
  const map = [];
  let result = '';

  result += findDuplicate(words, map);
  result += getMostFrequent(map);
  result += getWordsAndCounts(map);

  console.log(result);
  return result;
};

const findDuplicate = (words, map) => {
  let result = '';
  let firstRepeatFound = false;

  for (const word of words) {
    word = word.toLowerCase();
    if (!map[word]) {
      map[word] = 1;
    } else {
      map[word] = map[word] + 1;
      if (!firstRepeatFound) {
        firstRepeatFound = true;
        result += `The first duplicated word is: ${word}`;
      }
    }
  }

  return result;
};

const getMostFrequent = (map) => {
  let result = ' Most frequently used words: ';

  let mostFrequent = [];

  for (let word of Object.keys(map)) {
    if (!mostFrequent[0]) mostFrequent[0] = { word, count: map[word] };
    else if (map[word] > mostFrequent[0].count) {
      mostFrequent[2] = mostFrequent[1];
      mostFrequent[1] = mostFrequent[0];
      mostFrequent[0] = { word, count: map[word] };
    } else if (mostFrequent[1] && map[word] > mostFrequent[1].count) {
      mostFrequent[2] = mostFrequent[1];
      mostFrequent[1] = { word, count: map[word] };
    } else if (!mostFrequent[1]) mostFrequent[1] = { word, count: map[word] };
    else if (mostFrequent[2] && map[word] > mostFrequent[2].count) {
      mostFrequent[2] = { word, count: map[word] };
    } else if (!mostFrequent[2]) mostFrequent[2] = { word, count: map[word] };
  }

  for (let entry of mostFrequent) {
    if (entry) result += `[${entry.word}: count: ${entry.count}]`;
  }

  return result;
};

const getWordsAndCounts = (map) => {
  let result = ' All words and their counts: ';

  for (let word of Object.keys(map)) {
    result += `[${word}: count: ${map[word]}]`;
  }

  return result;
};

module.exports = repeatedWords;
