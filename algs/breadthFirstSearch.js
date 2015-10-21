var graph = [];
graph['A'] = ['B', 'D', 'G'];
graph['B'] = ['E', 'C'];
graph['C'] = [];
graph['E'] = ['A', 'F', 'J'];


var searchQueue = [];

var bfsearch = function(item) {
  var searched = ['A'];
  var n = '';
  searchQueue = graph['A'];
  while (searchQueue.length > 0) {
    n = searchQueue.shift();
    if (! searched[n]) {
      if (n === item) {
        console.log('Item was found');
        return true;
      } else {
        searched.push(n);
        if (graph[n]) {
          searchQueue = searchQueue.concat(graph[n]);
        }
      }
    }
  }
  return false;
}

console.log(bfsearch('J'));
console.log(bfsearch('I'));


