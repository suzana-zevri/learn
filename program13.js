function repeatAsync(operation, num) {
  return setTimeout( function(){
    if (num <= 0) return
    operation();
    return repeat(operation, --num)
  });
}

module.exports = repeatAsync