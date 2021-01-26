const express = require('express');
const path = require('path');

const app = express();

const absolutePath = path.join(__dirname, 'public');

const static = express.static(absolutePath);

app.use(static);

app.listen(3000, () => {
  console.log('Express server listening on port 3000...')
})
