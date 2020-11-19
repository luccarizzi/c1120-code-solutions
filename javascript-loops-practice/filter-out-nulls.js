/* exported filterOutNulls */

function filterOutNulls(values) {
  newValuesWithoutNull = [];
  for (var i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      newValuesWithoutNull.push(values[i]);
    }
  }
  return newValuesWithoutNull;
}
