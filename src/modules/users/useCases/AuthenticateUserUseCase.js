
const bcryptjs = require('bcryptjs');

const {sign} = require('jsonwebtoken');
const {jwtConfig} = require('../../../config/jwtConfig');

const {UserRepository} = require('../repositories/UserRepository');

const AuthenticatelUserUseCase = {
  async authenticate({access_code, password}) {
    const findAccessCode = await UserRepository.findByAccessCode({access_code});

    if (!findAccessCode) {
      throw new Error('Access code or password is incorrect!');
    }

    const comparePasswordwithPasswordHashed = await bcryptjs.compare(
        password,
        findAccessCode.password,
    );

    console.log(comparePasswordwithPasswordHashed);

    if (!comparePasswordwithPasswordHashed) {
      throw new Error('Access code or password is incorrect!');
    }

    try {
      const token = sign({id: findAccessCode._id}, jwtConfig.secret, {
        subject: String(findAccessCode._id),
        expiresIn: jwtConfig.expiresIn,
      });

      return {
        id: findAccessCode._id,
        token,
      };
    } catch (err) {
      console.log(err);
    }
  },

};

module.exports = {AuthenticatelUserUseCase};
