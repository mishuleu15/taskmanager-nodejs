const mongoose = require('mongoose');

const connectionString =
  'mongodb+srv://slick123:slick123@slickrobocode.362t2.mongodb.net/taskmanager?retryWrites=true&w=majority';

mongoose
  .connect(connectionString)
  .then(() => console.log('Connected to the Db...'))
  .catch((error) => console.log(error));
