const express = require('express');
const app = express();

let nextId = 1;

const grades = {

}

app.use(express.json());

app.get('/api/grades', (req, res) => {
  let gradesArray = [];
  for (let id in grades) {
    gradesArray.push(grades[id]);
  }
  res.json(gradesArray);
})

app.post('/api/grades', (req, res) => {
  req.body['id'] = nextId;
  grades[nextId] = req.body;
  res.status(201).json(grades[nextId]);
  nextId++;
})

app.listen(3000, () => {
  console.log('Express server listening on port 3000...')
})
