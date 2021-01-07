const express = require('express');
const app = express();

let nextId = 1;

const grades = {

}

app.get('/api/grades', (req, res) => {
  let gradesArray = [];
  for (let id in grades) {
    gradesArray.push(grades[id]);
  }
  res.json(gradesArray);
})

app.use(express.json());

app.post('/api/grades', (req, res) => {
  req.body['id'] = nextId;
  grades[nextId] = req.body;
  nextId++;
  res.status(201).send(req.body)
})

app.listen(3000, () => {
  console.log('Express server listening on port 3000...')
})
