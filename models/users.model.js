const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: false
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: false,
    default: 'user'
  }, 
  createdAt: {
    type: Date,
        default: Date.now
  },
  lastUpdatedAt: {
    type: Date,
        default: Date.now
  }
})

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel