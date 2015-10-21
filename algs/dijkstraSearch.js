var graph = {};
graph['START'] = {};
graph['START']['A'] = 6;
graph['START']['B'] = 2;
graph['A'] = {};
graph['A']['FIN'] = 1;
graph['B'] = {};
graph['B']['A'] = 3;
graph['B']['FIN'] = 5;
graph['FIN'] = {};

var costs = {};
costs['A'] = 6;
costs['B'] = 2;
costs['FIN'] = Infinity;

var parents = {};
parents['A'] = 'START';
parents['B'] = 'START';
parents['FIN'] = null;

var processed = [];

var dijkstra = function() {
  var node = findCheapestNode(costs);
  while (node !== null ) {
    var cost = costs[node];
    var neighbours = graph[node];
    for (var key in neighbours) {
      if ( neighbours.hasOwnProperty(key)) {
        var newCost = cost + neighbours[key];
        if ( costs[key] > newCost ){
          costs[key] = newCost;
          parents[key] = node;
        }
      }
    }
    processed[node] = true;
    node = findCheapestNode(costs);
  }
}

var findCheapestNode = function(obj) {

  var lowestCost = Infinity;
  var lowestCostNode = null;
  for (var key in obj) {
    if ( obj.hasOwnProperty(key)) {
      var cost = costs[key];
      if (cost < lowestCost && !processed[key] ) {
        console.log(key);
        lowestCost = cost;
        lowestCostNode = key;
      }
    }
  }
  return lowestCostNode;
}

dijkstra()  ;
console.log(costs, parents);


