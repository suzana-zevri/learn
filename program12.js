function Spy(target, method) {
  var result = { count: 0 };
  var oldMethod = target[method];
  target[method] = function(){
    result.count++;
    return oldMethod.apply(target, arguments);
  };
  return result;
}

module.exports = Spy