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
    select "name", "course", "score", "gradeId"
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
  const course = req.body.course;
  const score = req.body.score;

  if (!name) {
    return res.status(400).json('name property invalid or not supplied.');
  } else if (!course) {
    return res.status(400).json('course property invalid or not supplied.');
  } else if (!score) {
    return res.status(400).json('score property invalid or not supplied.');
  } else if (parseInt(score, 10) < 1 || parseInt(score, 10) > 100) {
    return res.status(400).json('score value must be between 1 and 100.');
  }

  const values = [name, course, score];

  const text = `
    insert into grades ("name", "course", "score")
    values ($1, $2, $3)
    returning *
  `;

  // const text = `
  //   insert into cat ("food", "nap", "play")
  //   values ($4, $10, $99)
  //   returning *
  // `;

  db
    .query(text, values)
    .then(result => {
      const grade = result.rows[0];
      res.status(201).json(grade);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      })
    });
})

app.put('/api/grades/:gradeId', (req, res) => {
  const gradeId = req.params.gradeId;
  const name = req.body.name;
  const course = req.body.course;
  const score = req.body.score;

  if (!name) {
    return res.status(400).json('name property invalid or not supplied.');
  } else if (!course) {
    return res.status(400).json('course property invalid or not supplied.');
  } else if (!score) {
    return res.status(400).json('score property invalid or not supplied.');
  } else if (parseInt(score, 10) < 1 || parseInt(score, 10) > 100) {
    return res.status(400).json('score value must be between 1 and 100.');
  }

  const values = [gradeId, name, course, score];

  const text = `
    update grades
    set "name" = $2, "course" = $3, "score" = $4
    where "gradeId" = $1
    returning *
  `

  db
    .query(text, values)
    .then(result => {
      if (result.rows.length === 0) {
        return res.status(404).json({
          error: 'The requested grade does not exist.'
        })
      }
      const grade = result.rows[0];
      res.status(200).json(grade);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      })
    });
})

app.delete('/api/grades/:gradeId', positiveInterger, (req, res) => {
  const gradeId = req.params.gradeId;

  const values = [gradeId];

  const text = `
    delete from grades
    where "gradeId" = $1
    returning *
  `

  db
    .query(text, values)
    .then(result => {
      if (result.rows.length === 0) {
        return res.status(404).json({
          error: 'The requested grade does not exist.'
        })
      }
      const grade = result.rows[0];
      res.status(204).json(grade);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      })
    });
})

app.listen(3000, () => {
  console.log("Express server listening on port 3000...")
})
