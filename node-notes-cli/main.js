const { Console } = require('console');
const fs = require('fs');

const dataJson = require('./data.json');

const handler = {
  read: () => {
    for (let note in dataJson.notes) {
      console.log(`${note}. ${dataJson.notes[note]}`);
    }
  },
  create: () => {
    dataJson.notes[dataJson.nextId] = process.argv[3];
    dataJson.nextId++;
  },
  update: () => {
    dataJson.notes[process.argv[3]] = process.argv[4];
  },
  deleteId: () => {
    delete dataJson.notes[process.argv[3]];
  }
}

const {
  read,
  create,
  update,
  deleteId
} = handler;

switch (process.argv[2]) {
  case 'read':
    read();
    break;
  case 'create':
    create();
    break;
  case 'update':
    update();
    break;
  case 'delete':
    deleteId();
    break;
  default:
    console.log('Invalid command.')
}

const changedDataJson = JSON.stringify(dataJson, null, 2);

fs.writeFile('./data.json', changedDataJson, err => {
  if (err) {
    console.error(err);
  };
})
