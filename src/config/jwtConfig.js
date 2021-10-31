require('dotenv').config();

const jwtConfig = {
  expiresIn: 3600000,
  secret: process.env.SECRET,
};

module.exports = {jwtConfig};
