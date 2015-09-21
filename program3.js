 function doubleAll(numbers) {
  // var result = []
  // for (var i = 0; i < numbers.length; i++) {
  //   result.push(numbers[i] * 2)
  // }
  // return result
  return numbers.map(function(n){
    return n*2;
  })
}

module.exports = doubleAll