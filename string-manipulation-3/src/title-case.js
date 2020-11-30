/* exported titleCase */

function titleCase(title) {
  var separateWords = title.split(" ");
  var finalString = "";
  var space = " ";

  for (var i = 0; i < separateWords.length; i++) {

    if (separateWords[i].toLowerCase() === "javascript") {
      finalString += "JavaScript" + space;
    }

    else if (separateWords[i].toLowerCase() === "javascript:") {
      finalString += "JavaScript:" + space;
    }

    else if (separateWords[i].toLowerCase() === "api") {
      finalString += "API" + space;
    }

    else if (separateWords[i].toLowerCase() === "web") {
      finalString += "Web" + space;
    }

    else {

      if (separateWords[i].length >= 4) {
        finalString += separateWords[i][0].toUpperCase();
        for (var k = 1; k < separateWords[i].length; k++) {
          if (separateWords[i][k - 1] === "-") {
            finalString += separateWords[i][k].toUpperCase();
          } else {
            finalString += separateWords[i][k].toLowerCase();
          }
        }
        finalString += space;
      }

      else if (separateWords[i - 1][separateWords[i - 1].length - 1] === ":") {
        finalString += separateWords[i][0].toUpperCase();
        for (var j = 1; j < separateWords[i].length; j++) {
          finalString += separateWords[i][j].toLowerCase();
        }
        finalString += space;
      }

      else if (separateWords[i].length <= 3) {
        finalString += separateWords[i].toLowerCase() + space;
      }

    }
  }
  return finalString.trimEnd();
}
