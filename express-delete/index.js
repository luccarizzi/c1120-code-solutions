const express = require('express');
const app = express();

const grades = {
  12: {
    id: 12,
    name: 'Tim Berners-Lee',
    course: 'HTML',
    score: 95
  },
  47: {
    id: 47,
    name: 'Brendan Eich',
    course: 'JavaScript',
    score: 100
  },
  273: {
    id: 273,
    name: 'Forbes Lindsay',
    course: 'JavaScript',
    score: 92
  }
}

app.listen(3000, () => {
  console.log("Express server listenin on port 3000...")
})

let gradesArray = [];

app.get('/api/grades', (req, res) => {
  if (gradesArray.length === 0) {
    for (let id in grades) {
      gradesArray.push(grades[id]);
    }
    res.json(gradesArray);
  } else {
    res.json(gradesArray);
  }
})

app.delete('/api/grades/:id', (req, res) => {
  gradesArray.splice(req.params.id,1);
  res.sendStatus(204);
})
