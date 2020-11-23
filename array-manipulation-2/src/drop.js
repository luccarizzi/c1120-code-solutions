/* exported drop */

function drop(array, count) {
  var newArray = [];
  var i = count;
  while (i < array.length) {
    newArray.push(array[i]);
    i++;
  }
  return newArray;
}
