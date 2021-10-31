const {mongoose} = require('../../../database/index');


const UserSchema = new mongoose.Schema({
  access_code: {
    type: String,
    required: true,
    minlength: 4,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
},
{timestamps: true},
);

const UserModel = mongoose.model('user', UserSchema);

module.exports = UserModel;
