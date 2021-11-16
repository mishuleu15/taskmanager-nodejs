const mongoose = require('mongoose');

const connectionString =
  'mongodb+srv://slick123:slick123@slickrobocode.362t2.mongodb.net/taskmanager?retryWrites=true&w=majority';

mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to the DB...'))
  .catch((error) => console.log(error));
