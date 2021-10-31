const UserModel = require('../schemas/User');

const UserRepository = {
  async create({access_code, password}) {
    const user = {
      access_code,
      password,
    };

    await UserModel.create(user);
  },

  async findByAccessCode({access_code}) {
    const user = await UserModel.findOne({access_code: access_code});

    return user;
  },

  async findById(_id) {
    const user = await UserModel.findOne({_id});

    return user;
  },

  async updateUser({_id, password}) {
    const user = await UserModel.findByIdAndUpdate(_id, {
      $set: {
        password: password,
      },
    });

    return user;
  },

  async deleteUser({_id}) {
    await UserModel.findByIdAndDelete(_id);
  },
};

module.exports = {UserRepository};
