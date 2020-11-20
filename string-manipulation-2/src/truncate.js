/* exported truncate */

function truncate(length, string) {
  if (string.length === 0) {
    return "..."
  } else if (length > string.length) {
    return string + "...";
  } else {
    var lengthIndex = length - 1;
    var truncatedString = "";
    var i = 0;
    while (i <= lengthIndex) {
      truncatedString += string[i];
      if (i === lengthIndex) {
        truncatedString += "...";
        break;
      }
      i++;
    }
    return truncatedString;
  }
}
