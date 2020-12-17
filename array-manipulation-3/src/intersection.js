/* exported intersection */

function intersection(first, second) {
  var intersectioned = [];
  for (var i = 0; i < first.length; i++) {
    if (first.includes(second[i]) && !intersectioned.includes(second[i])) {
      intersectioned.unshift(second[i])
    }
  }
  for (var j = 0; j < second.length; j++) {
    if (second.includes(first[j]) && !intersectioned.includes(first[j])) {
      intersectioned.unshift(first[i])
    }
  }
  return intersectioned;
}
