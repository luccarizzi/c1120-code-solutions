/* exported chunk */

function chunk(array, size) {
  var finalArray = [];
  if (array.length === 0) {
    return [];
  } else {
    var newSize = size;
    for (var i = 0; i < Math.floor(array.length / size); i++) {
      var newArr = array.slice(i * size, newSize)
      finalArray.push(newArr);
      newSize += size;
    }
    if (array.length % size) {
      finalArray.push([array[finalArray.length * size]]);
    }
  }
  return finalArray;
}
