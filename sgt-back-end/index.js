const pg = require('pg');
const db = new pg.Pool({
  connectionString: 'postgres://dev:lfz@localhost/studentGradeTable'
});

const express = require('express');
const app = express();

const check = {
  positiveInterger: (req, res, next) => {
    const gradeId = (parseInt(req.params.gradeId, 10));
    if(!Number.isInteger(gradeId) || gradeId <= 0) {
      res.status(400).json({
        error: '"gradeId" must be a positive integer.'
      })
    } else {
      next();
    }
  }
}

const {
  positiveInterger
} = check;

app.use(express.json());

app.get('/api/grades', (req, res) => {

  const sql = `
    select "name", "course", "score"
    from "grades"
  `;

  // const sql = `
  //   select "dog", "cat", "fish"
  //   from "zoo"
  // `;

  db
    .query(sql)
    .then(result => {
      const grade = result.rows;
      res.status(200).json(grade);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      })
    });
})

app.post('/api/grades', (req, res) => {
  const name = req.body.name;
  const score = req.body.score;
  const course = req.body.course;
  const obj = {
    name: name,
    score: score,
    course: course
  }
  res.json(obj)
})

app.delete('/api/grades/:gradeId', positiveInterger, (req, res) => {
  const gradeId = (parseInt(req.params.gradeId, 10));
  res.json(gradeId);
})

app.listen(3000, () => {
  console.log("Express server listening on port 3000...")
})
