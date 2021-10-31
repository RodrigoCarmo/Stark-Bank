require('dotenv').config();

const databaseConfig = {
  connectionMongoDB: process.env.MONGODB_CONNECTION,
};

module.exports = {databaseConfig};
