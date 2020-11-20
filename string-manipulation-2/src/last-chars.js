/* exported lastChars */

function lastChars(length, string) {
  if (string.length === 0) {
    return '';
  } else if (length > string.length) {
    return string;
  } else {
    var lastChars = '';
    for (var i = string.length - length; i < string.length; i++) {
      lastChars += string[i];
    }
  }
  return lastChars;
}
