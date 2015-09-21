 function reduce(arr, fx, initial) {
  if (arr.length == 0) return initial;
  current = fx(initial, arr[0], 0, arr);
  return reduce(arr.slice(1), fx, current)
}

module.exports = reduce