/* exported swapChars */

function swapChars(firstIndex, secondIndex, string) {
  var newFirstIndex = string[secondIndex];
  var newSecondIndex = string[firstIndex];
  var newString = '';

  for (var i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      newString += newFirstIndex;
    } else if (i === secondIndex) {
      newString += newSecondIndex;
    } else {
      newString += string[i];
    }
  }
  return newString;
}
