const mongoose = require('mongoose');

const connectionString = '';

mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to the Db...'))
  .catch((error) => console.log(error));
