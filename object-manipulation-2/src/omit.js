/* exported omit */

function omit(source, keys) {
  // debugger;
  var omittedObject = [];
  for (var property in source) {
    for (var i = 0; i < keys.length; )
  }
  return omittedObject;
}

omit({ foo: 1, bar: 2, baz: 3 }, ['foo', 'baz']);

omit({ qux: 4, corge: 5 }, ['bar', 'grault'])

omit({}, ['foo', 'bar', 'baz'])
