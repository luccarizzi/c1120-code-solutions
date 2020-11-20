/* exported firstChars */

function firstChars(length, string) {
  if (string.length === 0) {
    return ""
  } else if (length > string.length) {
    return string;
  } else {
    var lengthIndex = length - 1;
    var firstCharOfString = "";
    var i = 0;
    while (i <= lengthIndex) {
      firstCharOfString += string[i];
      if (i === lengthIndex) {
        firstCharOfString += "";
        break;
      }
      i++;
    }
    return firstCharOfString;
  }
}
