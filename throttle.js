var throttle = function (time, fn) {
  var isThrottled = false;
  return function(){
    if (isThrottled) return;
    isThrottled = true;
    fn.apply(null, arguments);
    setTimeout(function(){
      isThrottled = false;
    }, time)
  }
}

var log = function(message) {
  console.log(message);
}

var logT = throttle(2000, log);

logT('test 1');
logT('test 2');
logT('test 3');

setTimeout(function(){
  logT('test 4');
}, 3000);



module.exports = throttle;