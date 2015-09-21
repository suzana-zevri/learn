function objCount(prop) {
  return Array.prototype.reduce.call(arguments, function(p, c){
    return (Object.prototype.hasOwnProperty.call(c, prop) ) ? p + 1 : p
  }, 0);
}

module.exports = objCount