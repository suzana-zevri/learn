 function countWords(inputWords) {
  return inputWords.reduce(function(prev, current){
    prev[current] = (prev[current]) ? prev[current] + 1 : 1;
    return prev;
  }, {});
}

module.exports = countWords