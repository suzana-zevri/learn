var states = ['mt', 'wa', 'or', 'id', 'nv', 'ut', 'ca', 'az'];

var stations = {};
stations['kone'] = ['id', 'nv', 'ut'];
stations['ktwo'] = ['wa', 'id', 'mt'];
stations['kthree'] = ['or', 'nv', 'ca'];
stations['kfour'] = ['nv', 'ut'];
stations['kfive'] = ['ca', 'az'];


// helpers for array operations
var intersect = function(array1, array2) {
  return array1.filter(function(n) {
    return array2.indexOf(n) != -1
  });
};
var difference = function(array1, array2) {
  return array1.filter(function(n) {
    return array2.indexOf(n) == -1
  });
}

var union = function(array1, array2) {
  array1 = array1.filter(function(n) {
    return array2.indexOf(n) == -1
  });
  return array2.concat(array1);
}

// function not necessary, just for enclosing the code
var greedy = function(states, stations) {
  var finalStations = [];

  while (states.length) {
    var statesCovered = [];
    // best station is the station
    // that covers most of the needed states
    var bestStation = null;
    for (station in stations) {
      stationStates = stations[station];
      var covered = intersect(states, stationStates);
      if (covered.length > statesCovered.length){
        bestStation = station;
        statesCovered = covered;
      }
    }
    states = difference(states, statesCovered);
    finalStations.push(bestStation);
  }
  return finalStations;
}
console.log(greedy(states, stations));
console.log(intersect(stations['kone'], stations['ktwo'] ));
console.log(difference(states, stations['kfive'] ));
console.log(union(stations['kone'], stations['ktwo'] ));


