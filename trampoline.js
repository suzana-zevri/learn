function trampoline(fn) {
  while(fn && typeof fn === 'function') {
    fn = fn()
  }
}

function trop(operation, num) {
  return trampoline(function() {
      return repeat(operation, num)
    })
}
// trop(function(){ console.log('hi there');}, 5);
module.exports = trampoline