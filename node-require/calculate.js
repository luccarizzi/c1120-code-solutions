
const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

const operator = process.argv[3];

if (operator === 'plus') {
  console.log('result:', add(Number(process.argv[2]), Number(process.argv[4])));
} else if (operator === 'minus') {
  console.log('result:', subtract(Number(process.argv[2]), Number(process.argv[4])));
} else if (operator === 'times') {
  console.log('result:', multiply(Number(process.argv[2]), Number(process.argv[4])));
} else if (operator === 'over') {
  console.log('result:', divide(Number(process.argv[2]), Number(process.argv[4])));
}
