function duckCount() {
  return Array.prototype.reduce.call(arguments, function(p, c){
    return (Object.prototype.hasOwnProperty.call(c, 'quack') ) ? p + 1 : p
  }, 0);
}

module.exports = duckCount