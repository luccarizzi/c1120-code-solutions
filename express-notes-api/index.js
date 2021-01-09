const dataJson = require('./data.json');
const notes = dataJson.notes;

const express = require('express');
const app = express();

const fs = require('fs');

const checkers = {
  checkIntSign: (req, res, next) => {
    if (Math.sign(req.params.id) === -1) {
      res.status(400).json({ 'error': 'id must be a positive integer' });
    } else if (isNaN(req.params.id)) {
      res.status(400).json({ 'error': 'id must be a positive integer' });
    } else {
      next()
    }
  },
  checkContent: (req, res, next) => {
    if (!req.body.content) {
      res.status(400).json({ 'error': 'content is a required field' });
    } else {
      next();
    }
  },
  checkId: (req, res, next) => {
    const id = parseInt(req.params.id);
    for (let note in notes) {
      if (parseInt(note) === id) {
        return next();
      }
    }
    return res.status(404).json({ 'error': `cannot find note with id ${id}` });
  }
}

const {
  checkIntSign,
  checkContent,
  checkId
} = checkers;

app.use(express.json());

app.get('/api/notes', (req, res) => {
  let notesArray = [];
  for (let id in notes) {
    notesArray.push(notes[id]);
  }
  res.json(notesArray);
})

app.get('/api/notes/:id', checkIntSign, (req, res) => {
  const id = parseInt(req.params.id);
  if (notes[id]) {
    res.status(200).json(notes[id]);
  } else {
    res.status(404).json({ 'error': `cannot find note with id ${id}` });
  }
})

app.post('/api/notes', checkContent, (req, res) => {
  req.body['id'] = dataJson.nextId;
  notes[dataJson.nextId] = req.body;

  const newData = JSON.stringify(dataJson, null, 2);
  fs.writeFile('./data.json', newData, 'utf8', err => {
    if (err) {
      res.status(500).json({ "error": "An unexpected error occurred." });
    } else {
      res.status(201).json(req.body);
    }
  })
  dataJson.nextId++;
})

app.delete('/api/notes/:id', checkIntSign, checkId, (req, res) => {
  delete notes[req.params.id];
  const newData = JSON.stringify(dataJson, null, 2);
  fs.writeFile('./data.json', newData, 'utf8', err => {
    if (err) {
      res.status(500).json({ "error": "An unexpected error occurred." });
    } else {
      res.status(204).json({})
    }
  })
})

app.put('/api/notes/:id', checkIntSign, checkContent, checkId, (req, res) => {

  req.body['id'] = parseInt(req.params.id);
  notes[req.params.id] = req.body;

  const newData = JSON.stringify(dataJson, null, 2);
  fs.writeFile('./data.json', newData, 'utf8', err => {
    if (err) {
      res.status(500).json({ "error": "An unexpected error occurred." });
    } else {
      res.status(200).json(notes[req.params.id]);
    }
  })
})

app.listen(3000);
