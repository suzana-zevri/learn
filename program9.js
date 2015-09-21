var slice = Array.prototype.slice
// or var slice = Function.call.bind(Array.prototype.slice);

function logger(namespace) {
  return function() {
    var args = slice.apply(arguments);
    console.log.apply(console, [namespace].concat(args));
  }
}

module.exports = logger