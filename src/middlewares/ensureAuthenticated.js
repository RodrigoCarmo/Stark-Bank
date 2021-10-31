const {verify} = require('jsonwebtoken');
const {jwtConfig} = require('../config/jwtConfig');

function ensureAuthenticated(request, response, next) {
  const auth =
      request.headers.authorization ||
      request.body.token ||
      request.query.token ||
      request.headers['x-access-token'];

  let token;

  if (!auth) {
    return response.status(400).json({error: 'JWT token is missing!'});
  }

  if (request.headers.authorization) {
    [, token] = auth.split(' ');
  }

  if (request.body.token) {
    token = request.body.token;
  }

  if (request.query.token) {
    token = request.query.token;
  }

  if (request.headers['x-access-token']) {
    token = request.headers['x-access-token'];
  }

  try {
    verify(token, jwtConfig.secret);

    next();
  } catch (error) {
    return response.status(400).json(error);
    // throw new Error('JWT token expired!')
  }
}

module.exports = {ensureAuthenticated};
