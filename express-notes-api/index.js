const dataJson = require('./data.json');
const notes = dataJson.notes;

const express = require('express');
const app = express();

const fs = require('fs');

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
  for (let note in notes) {
    if (parseInt(note) === id) {
      res.status(200).json(notes[id]);
      return;
    }
  }
  res.status(404).json({ 'error': `cannot find note with id ${id}`});
})

function checkIntSign(req, res, next) {
  if (Math.sign(req.params.id) === -1) {
    res.status(400).json({ 'error': 'id must be a positive integer' });
    return;
  } else if (isNaN(req.params.id)) {
    res.status(400).json({ 'error': 'id must be a positive integer' });
  } else {
    next()
  }
}

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

function checkContent(req, res, next) {
  if (Object.keys(req.body).length === 0) {
    res.status(400).json({ 'error': 'content is a required field' });
    return;
  } else {
    next();
  }
}

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

function checkId (req, res, next) {
  const id = parseInt(req.params.id);
  for (let note in notes) {
    if (parseInt(note) === id) {
      return next();
    }
  }
  return res.status(404).json({ 'error': `cannot find note with id ${id}` });
}

app.listen(3000);
