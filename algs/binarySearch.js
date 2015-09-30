var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVXYZ';
var orderedList = alphabet.split('');


var binarySearch = function(list, searchTerm) {
  var min = 0;
  var max = list.length;
  var guess = null;
  var position = null;

  while (min < max) {
    position = Math.floor((max + min) / 2);
    guess = list[position];
    if (searchTerm === guess ) {
      return position;
    }
    if (searchTerm < guess ){
      max = position;
    }
    if (searchTerm > guess ) {
      min = position;
    }
  }
}
console.log(binarySearch(orderedList, 'N'));

