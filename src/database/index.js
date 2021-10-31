const mongoose = require('mongoose');
const {databaseConfig} = require('../config/databaseConfig');

mongoose.connect(`${databaseConfig.connectionMongoDB}`,
    {
      retryWrites: true,
    },
).then(() => {
  console.log('Succesfully connect to MongoDB');
})

    .catch((err) => {
      console.log('Connection error', err);
      process.exit();
    });

mongoose.Promise = global.Promise;

module.exports = {mongoose};
