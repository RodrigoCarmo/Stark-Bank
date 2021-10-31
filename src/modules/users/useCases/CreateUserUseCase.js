
const bcryptjs = require('bcryptjs');
const {UserRepository} = require('../repositories/UserRepository');

const CreateUserUseCase = {
  async create({access_code, password}) {
    const passwordHash = await bcryptjs.hash(password, 8);

    const verifyIfExistsUser = await UserRepository.findByAccessCode({access_code});

    if (verifyIfExistsUser) {
      throw new Error('This access code has already been registered.');
    }
    await UserRepository.create({access_code, password: passwordHash});
  },
};

module.exports = {CreateUserUseCase};
