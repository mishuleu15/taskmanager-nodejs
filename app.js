const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
require('dotenv').config();

const PORT = 3000;

// middleware

app.use(express.json());

// routes
app.get('/hello', (req, res, next) => {
  res.status(200).send('Hello World');
});

app.use('/api/v1/tasks', tasks);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}...!`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
