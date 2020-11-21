/* exported chunk */

function chunk(array, size) {
  if (array.length === 0) {
    return [];
  } else {
    var finalArray = [];
    if (array.length % size === 0) {
      for (var i = 0; i < array.length; i++) {
        finalArray.push([array[i]]);
      }
    }
  }
  return finalArray;
}

chunk(['foo', 'bar', 'baz', 'qux'], 2);
