
const {UserRepository} = require('../repositories/UserRepository');

const DeleteUserUseCase = {
  async delete({_id}) {
    const verifyIfExistsUser = await UserRepository.findById({_id});

    if (!verifyIfExistsUser) {
      throw new Error('This iD non exist.');
    }
    await UserRepository.deleteUser({_id});
  },
};

module.exports = {DeleteUserUseCase};
