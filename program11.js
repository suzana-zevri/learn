function arrayMap(arr, fn) {
  return arr.reduce(function(prev, current, i, arr){
    prev[i] = fn(current, i, arr);
    return prev;
  }, []);
}

module.exports = arrayMap