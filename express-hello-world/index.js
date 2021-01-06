const express = require('express');
const app = express();

app.use((req, res) => {
  res.send('Information sent to the user.')
})

app.listen(3000, () => {
  console.log('Express server listening on port 3000.')
})
