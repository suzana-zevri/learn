var T1 = ['A', ['B', ['D']], ['C']];

// visual tree structure
//  A
//  / \
// B   C
// |
// D

// All children relations for this tree
// A.adj = ['B', 'C']
// B.adj = ['D']
// C.adj = []
// D.adj = []

// The relation is valid from both sides (commutative)
// A -> B
// A -> C
// B -> A
// B -> D
// C -> A
// D -> B

// How to transform the data to work with it easier:
// [ A: [B, C], B: [A, D], C: [A], D: [B] ]



var newData = [];

// This recusive function will be used just for flattening the initial data structure
var transform = function(arr) {
    var parent = arr[0];
    newData[parent] = newData[parent] || [];

    if (arr.length > 1){
        var rest = arr.slice(1);
        rest.forEach(function(item){
            newData[item[0]] = newData[item[0]] || [];
            if( newData[parent].indexOf(item[0]) < 0 ){
                newData[parent].push(item[0]);
            }
            if( newData[item[0]].indexOf(parent) < 0 ){
                newData[item[0]].push(parent);
            }
            if(item.length > 1 ) {
                transform(item);
            }
        });
    }
    return newData;
};



var reroot = function(tree, base) {
    // get a more flat type of structure
    var newStructure = transform(tree);
    // keep track of nodes already inserted in the new tree
    var trackNodes = [];
    // the new tree rebased
    var newTree = [];
    // initial values
    newTree[0] = base;
    trackNodes.push(base);

    // recursive function that appends the children to parent in an array form
    var appendChildren = function(arr, parent){
        if (arr.length) {
            arr.forEach(function(item){
                if (trackNodes.indexOf(item) < 0 ) {
                    trackNodes.push(item);
                    parent.push([item]);
                    if(newStructure[item].length) {
                        appendChildren(newStructure[item], parent[parent.length-1]);
                    }
                }
            });
        }
    };
    appendChildren(newStructure[base], newTree);
    console.log(newTree);

    return newTree;
};




reroot(T1, 'B');
reroot(T1, 'C');
reroot(T1, 'D');

