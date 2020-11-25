/* exported defaults */

function defaults(target, source) {
  if (Object.keys(target).length === 0) {
    for (var prop in source) {
      target[prop] = source[prop];
    }
  } else {
    for (var propS in source) {
      for (var propT in target) {
        if (propS !== propT) {
          target[propS] = source[propS];
        } else {
          target[propT] = target[propT];
        }
      }
    }
  }
}

var target = {
  foo: 1,
  bar: null,
  baz: 3
};
var source = {
  foo: 4,
  bar: 2,
  baz: 5,
  qux: false
};

defaults(target, source);

target;

target = {
  foo: 1,
  bar: null,
  baz: 3,
  qux: false
}
