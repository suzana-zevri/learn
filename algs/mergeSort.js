var unorderedList = [5, 2, 7, 9, 1, 8, 4];
var unorderedListChars = ['A', 'D', 'S', 'A', 'B', 'R', 'C', 'X'];

var mergeArr = function(left, right){
    var result = [];
    while (left.length && right.length) {
        if (left[0] < right[0]){
            result.push(left[0]);
            left = left.slice(1)
        }  else {
            result.push(right[0]);
            right = right.slice(1)
        }
    }
    while (left && left.length) {
        result.push(left[0]);
        left = left.slice(1)
    }
    while (right && right.length) {
        result.push(right[0]);
        right = right.slice(1)
    }
    return result;
};

var mergeSort = function(list) {
    if (list.length <= 1 ) return list;

    var middle = Math.floor(list.length/2);
    var left = list.slice(0, middle);
    var right = list.slice(middle, list.length);
    left = mergeSort(left);
    right = mergeSort(right);

    return mergeArr(left, right);
};



console.log(mergeSort(unorderedList))
console.log(mergeSort(unorderedListChars))
