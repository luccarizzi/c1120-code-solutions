/* exported capitalizeWord */

function capitalizeWord(word) {
  if (word.toLowerCase() === "javascript") {
    return "JavaScript"
  } else {
    var capitalizedWord = "";
    var i = 0;
    while (i < word.length) {
      if (i === 0) {
        capitalizedWord += word[i].toUpperCase();
      } else {
        capitalizedWord += word[i].toLowerCase();
      }
      i++;
    }
  }
  return capitalizedWord;
}
