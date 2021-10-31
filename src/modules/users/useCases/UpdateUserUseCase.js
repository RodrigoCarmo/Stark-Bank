
const bcryptjs = require('bcryptjs');
const {UserRepository} = require('../repositories/UserRepository');

const UpdateUserUseCase = {
  async update({_id, password}) {
    const verifyId = await UserRepository.findById(_id);
    console.log(verifyId);
    if (!verifyId) {
      throw new Error('Not found ID');
    }

    const passwordHash = await bcryptjs.hash(password, 8);

    await UserRepository.updateUser({_id: verifyId._id, password: passwordHash});
  },
};

module.exports = {UpdateUserUseCase};
