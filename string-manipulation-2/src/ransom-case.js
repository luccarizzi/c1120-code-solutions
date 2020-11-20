/* exported ransomCase */

function ransomCase(string) {
  var lowerUpperCaseString = "";
  var i = 0;
  while (i < string.length) {
    if (i % 2) {
      lowerUpperCaseString += string[i].toUpperCase();
    } else {
      lowerUpperCaseString += string[i].toLowerCase();
    }
    i++
  }
  return lowerUpperCaseString;
}
