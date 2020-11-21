/* exported dropRight */

function dropRight(array, count) {
  if (array.length === 0) {
    return [];
  } else {
    var droppedArray = [];
    var newIndex = array.length - count;
    for (var i = 0; i < newIndex; i++) {
      droppedArray.push(array[i]);
    }
  }
  return droppedArray;
}
