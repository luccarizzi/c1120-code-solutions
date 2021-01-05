
const fs = require('fs');

const nodeArg = process.argv;

// for (let i = 2; i < nodeArg.length; i++) {
//   fs.readFile(`./${nodeArg[i]}`, 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
//   })
// }

console.log('cunning:', nodeArg[2])

console.log('hopper:', nodeArg[3])

console.log('dijik:', nodeArg[4])
