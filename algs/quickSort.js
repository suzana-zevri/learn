var unorderedList = [5, 2];
var unorderedListChars = ['A', 'D', 'S', 'A', 'B', 'R'];

var quickSort = function(list) {
    if (list.length < 2) {
        return list;
    } else {
        var pivot = list[0];
        var less = [];
        var greater = [];
        for (var i = 1; i <= list.length; i++ ){
            if( list[i] <= pivot ){
                less.push(list[i]);
            }
            if( list[i] > pivot ){
                greater.push(list[i]);
            }
        }
        return quickSort(less).concat(pivot).concat(greater);
    }

};

console.log(quickSort(unorderedList))
console.log(quickSort(unorderedListChars))
