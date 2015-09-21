var loremIpsum = {
      "name": "lorem-ipsum",
      "version": "0.1.1",
      "dependencies": {
        "optimist": {
          "version": "0.3.7",
          "dependencies": {
            "wordwrap": {
              "version": "0.0.2"
            }
          }
        },
        "inflection": {
          "version": "1.2.6"
        }
      }
    }

function getDependencies(tree, dependencies) {
  var dependencies = dependencies || [];

  if (typeof tree  == 'undefined' || typeof tree['dependencies'] !== 'object' )
    return dependencies;

  var depsObj = tree['dependencies'];
  var keys = Object.keys(depsObj);

  keys.map(function(key){
    if (depsObj[key]['version']) {
      var str = key + '@' + depsObj[key]['version'];
      if(dependencies.indexOf(str) < 0 ) {
        dependencies.push(str);
      }
      if ( depsObj[key]['dependencies'] ){
        getDependencies(depsObj[key], dependencies);
      }
    }

  });
  return dependencies.sort();

}
module.exports = getDependencies