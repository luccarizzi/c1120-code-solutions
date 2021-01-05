
const fs = require('fs');

const note = process.argv[2] + '\n';

fs.writeFile('note.txt', note, (err) => {
  if (err) {
    console.error(err)
  }
})
