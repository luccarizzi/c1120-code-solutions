/* exported take */

function take(array, count) {
  if (array.length === 0) {
    return [];
  } else {
    var newArray = [];
    var i = 0;
    while (i < count) {
      newArray.push(array[i]);
      i++;
    }
  }
  return newArray;
}
