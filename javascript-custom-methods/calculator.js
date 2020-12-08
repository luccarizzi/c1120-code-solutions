/* exported calculator */

var calculator = {
  add: function (x, y) {
    var total = x + y;
    return total;
  },
  subtract: function (x, y) {
    var total = x - y;
    return total;
  },
  multiply: function (x, y) {
    var total = x * y;
    return total;
  },
  divide: function (x,y) {
    var total = x / y;
    return total;
  },
  square: function (x) {
    var total = x * x;
    return total;
  },
  sumAll: function (arr) {
    var total = 0;
    for (var i = 0; i < arr.length; i++) {
      total += arr[i];
    }
    return total;
  },
  getAverage: function (arr) {
    var total = 0;
    for (var i = 0; i < arr.length; i++) {
      total += arr[i];
    }
    var average = total / arr.length;
    return average;
  }
}
