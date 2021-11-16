require('./db/connect');
const express = require('express');
const app = express();
const tasks = require('./routes/tasks');

const PORT = 3000;

// middleware

app.use(express.json());

// routes
app.get('/hello', (req, res, next) => {
  res.status(200).send('Hello World');
});

app.use('/api/v1/tasks', tasks);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}...!`);
});
