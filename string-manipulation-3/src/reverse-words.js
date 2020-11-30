/* exported reverseWords */

function reverseWords(string) {
  var splitStrings = string.split(" ");
  var newString = "";

  for (var i = 0; i < splitStrings.length; i++) {
    for (var j = splitStrings[i].length - 1; j >= 0; j--) {
      newString += splitStrings[i][j];
    }
    newString += " ";
  }

  return newString.trimEnd();
}
