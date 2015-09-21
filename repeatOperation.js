function repeat(operation, num, next) {
  return function(){
    if (num <= 0) return
    operation();
    return repeat(operation, --num)
  }
}

module.exports = repeat