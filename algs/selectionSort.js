var unorderedList = [5, 2, 7, 9, 1, 8, 4];
var unorderedListChars = ['A', 'D', 'S', 'A'];

var findSmallestIndex = function(list) {
  var smallest = list[0];
  var smallestIndex = 0;
  for (var i = 1; i <= list.length; i++){
    if (smallest > list[i]) {
      smallest = list[i];
      smallestIndex = i;
    }
  }
  return smallestIndex;
}

var selectionSort = function(list) {
  var newList = [];
  var initialLength = list.length;
  var index = 0;

  for (var i = 0; i < initialLength; i++){
    index = findSmallestIndex(list);
    newList.push(list[index]);
    list.splice(index, 1);
  }
  return newList;

}
console.log(selectionSort(unorderedList));
console.log(selectionSort(unorderedListChars));

